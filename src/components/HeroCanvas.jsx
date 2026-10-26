//DEVEN WEEDEN 2026
import {useRef, useEffect} from "react";
import { VERTEX, FRAGMENT } from "./heroShader.js";
import { scrollProgress } from "../scrollProgress.js";
import "./css/HeroCanvas.css";

//settings for each blob
const SIZES = [0.42, 0.62, 0.45, 0.55, 0.5, 0.52, 0.56, 0.46];
const SINK = [1, 1.05, 0.9, 1.15, 1, 1.1, 0.95, 0.8];
const SPEED = [0.1, 0.13, 0.09, 0.07, 0.12, 0.12, 0.08, 0.08];
const YSPEED = [0.12, 0.16, 0.11, 0.09, 0.15, 0.15, 0.1, 0.1];
const ZSPEED = [0.08, 0.1, 0.07, 0.06, 0.1, 0.1, 0.06, 0.06];
const WOBBLE = [1, 0.85, 0.6, 0.35, 0.4, 0.6, 0.9, 1];

//logs shader errors
function shaderHelp(gl, type, source){
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if(! gl.getShaderParameter(shader, gl.COMPILE_STATUS)){
    console.error(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  } else{
    return shader;
  }
}
function LavaLamp({direction}){
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl");
    if(gl == null){
      return;
    }
    const vertex = shaderHelp(gl, gl.VERTEX_SHADER, VERTEX);
    const fragment = shaderHelp(gl, gl.FRAGMENT_SHADER, FRAGMENT);
    if(vertex == null || fragment == null){
      return;
    }
    //two triangles that cover the screen
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER,buffer);
    gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);
    const program = gl.createProgram();
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if(! gl.getProgramParameter(program, gl.LINK_STATUS)){
      console.error(gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
      return;
    }
    const resLoc = gl.getUniformLocation(program, "Res");
    const topLoc = gl.getUniformLocation(program, "HTop");
    const bottomLoc = gl.getUniformLocation(program, "HBottom");
    const warmLoc = gl.getUniformLocation(program, "BlobW");
    const coolLoc = gl.getUniformLocation(program, "BlobC");
    const amberLoc = gl.getUniformLocation(program, "Orange");
    const periLoc = gl.getUniformLocation(program, "Blue");
    const dissolveLoc = gl.getUniformLocation(program, "Dissolve");

    //4 floats per blob, x y z radius
    const blobLoc = gl.getUniformLocation(program, "Blobs[0]");
    const blobs = new Float32Array(32);
    function updateBlobs(time, dissolve){
      //sinks slowly at first, then faster
      const fall = Math.pow(dissolve, 3);
      for(let i = 0; i < 8; i++ ){
        const phase = i * 2.5;
        blobs[i * 4] = 3 * Math.sin(time * SPEED[i] + phase) * WOBBLE[i];
        blobs[i * 4 + 1] = 1.85 * Math.cos(time * YSPEED[i] + phase) - 9 * fall * SINK[i];
        blobs[i * 4 + 2] = 1.4 * Math.sin(time * ZSPEED[i] + phase);
        blobs[i * 4 + 3] = SIZES[i];
      }
    }
    const loc = gl.getAttribLocation(program, "Position");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc,2, gl.FLOAT, false, 0, 0);

    function sizeDraw(dissolve){
      //capped at 1.5x for performance
      const adjRatio = Math.min(window.devicePixelRatio, 1.5);
      const w = Math.round(canvas.clientWidth * adjRatio);
      const h = Math.round(canvas.clientHeight * adjRatio);
      if(canvas.width !== w || canvas.height !== h){
        canvas.width = w;
        canvas.height = h;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.useProgram(program);
      gl.uniform2f(resLoc, canvas.width, canvas.height);
      //css colors, webgl wants 0-1 so divide by 255
      gl.uniform3f(topLoc, 27/255, 27/255, 32/255);
      gl.uniform3f(bottomLoc, 13/255, 13/255, 14/255);
      gl.uniform3f(warmLoc, 43/255, 37/255, 33/255);
      gl.uniform3f(coolLoc, 34/255, 36/255, 47/255);
      gl.uniform3f(amberLoc, 255/255, 194/255, 80/255);
      gl.uniform3f(periLoc, 118/255, 137/255, 255/255);
      gl.uniform1f(dissolveLoc, dissolve);
      gl.uniform4fv(blobLoc, blobs);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    }

    let frame;
    function tick(){
      const fn = (Date.now() / 1000);
      const dissolve = scrollProgress(canvas, 0.75, direction === "in");
      updateBlobs(fn, dissolve);
      sizeDraw(dissolve);
      frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);

    return () => {
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      cancelAnimationFrame(frame);
    };
    

  },[direction]);
  
  return <canvas ref={canvasRef}></canvas>;
}

export default LavaLamp;
