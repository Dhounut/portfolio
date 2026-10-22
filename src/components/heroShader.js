//DEVEN WEEDEN 2026
//sources
//https://iquilezles.org/articles/distfunctions/
//https://iquilezles.org/articles/smin/
//https://iquilezles.org/articles/normalsSDF/

export const VERTEX = `
attribute vec2 Position;

void main(){
    gl_Position = vec4(Position, 0.0, 1.0);
}
`;


export const FRAGMENT = `
precision highp float;
uniform vec2 Res;
uniform vec3 HTop;
uniform vec3 HBottom;
uniform vec4 Blobs[8];
uniform vec3 BlobW;
uniform vec3 BlobC;
uniform vec3 Orange;
uniform vec3 Blue;
uniform float Dissolve;

//distance to a ball
float sphere(vec3 p, vec3 c, float r){
    return length(p-c)-r;
}

//smooth min, melts the balls together
float smin(float a, float b, float k){
    float h = clamp(0.5 +0.5 * (b-a)/k, 0.0, 1.0);
    return mix(b, a, h) - k * h *(1.0-h);
}

float map(vec3 p) {
float d = 100000000000.0;
    for(int i = 0; i<8; i++){
       d = smin(d, sphere(p, Blobs[i].xyz, Blobs[i].w), 0.85);
    }
    return d;
}

//surface direction, for lighting
vec3 calcN(vec3 pos){
    float e = 0.0015;
    float x = map(pos + vec3(e, 0.0, 0.0)) - map(pos - vec3(e, 0.0, 0.0));
    float y = map(pos + vec3(0.0, e, 0.0)) - map(pos - vec3(0.0, e, 0.0));
    float z = map(pos + vec3(0.0, 0.0, e)) - map(pos - vec3(0.0, 0.0, e));
    return normalize(vec3(x,y,z));
}

void main(){
    float tier = floor(Dissolve * 6.0);
    float blockPx = pow(4.0, tier);
    vec2 sampleAt = gl_FragCoord.xy;
    if(blockPx > 1.0){
        sampleAt = floor(gl_FragCoord.xy / blockPx) * blockPx + blockPx * 0.5;
        sampleAt = min (sampleAt, Res - 0.5);
    }
    vec2 p2 = (sampleAt - 0.5 * Res) / Res.y;
    float lift = smoothstep(-0.62, 0.7, p2.y);
    vec3 bg = mix(HBottom, HTop, lift);
    float vignette = smoothstep(1.45, 0.2, length(p2));
    bg *= mix(0.6, 1.0, vignette);
    vec3 ro = vec3(0.0, 0.0, -6.0);
    vec3 rd = normalize(vec3(p2, 1.55));
    //raymarch, step until it hits a blob
    float t = 0.0;
    bool hit = false;
    for(int i = 0; i < 64; i++){
        float d = map(ro + rd * t);
        if(d<0.002){
            hit = true;
            break;
        }
        if(t>16.0){
            break;
        }
        t+=d;
    }
    vec3 color = bg;
    if(hit){
        vec3 n = calcN(ro + rd * t);
        vec3 lightDir = normalize(vec3(-0.65, 0.72, -0.55));
        float light = max(dot(n, lightDir), 0.0);
        //blue around the edges
        float rim = pow(1.0 - max(dot(n, -rd), 0.0), 3.0);
        vec3 base = mix(BlobW, BlobC, 0.5 - 0.5 * n.y);
        color = base * (0.4 + light) + Orange * light * 0.08 + Blue * rim * 0.3;
    }
    color = mix(color, HBottom, smoothstep(0.78, 1.0, Dissolve));
    gl_FragColor = vec4(color, 1.0);

}
`;
