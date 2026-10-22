//DEVEN WEEDEN 2026
import hero from '../assets/portfoliohero.png';
import oldHome from '../assets/portfoliooldhome.png';
import oldProj from '../assets/portfoliooldprojects.png';
import oldStudy from '../assets/portfoliooldstudy.png';
import normals from '../assets/portfolionormals.png';
import melt from '../assets/portfoliomelt.png';
import shading from '../assets/portfolioshading.png';

export default {
  slug: 'portfolio',
  title: 'Portfolio',
  summary: 'Redesign of my portfolio site built around a WebGL lava lamp',
  role: 'Design and Development',
  timeline: 'Fall 2026',
  cover: hero,
  coverAlt: 'Portfolio hero',
  tools: ['React', 'WebGL'],
  accent: 'periwinkle',
  featured: true,
  body: [
    {
      type: 'text',
      heading: 'Overview',
      paragraphs: [
        'This project is the second version of my portfolio site. The goal was a site that shows off design and development work instead of just listing projects, so it was redesigned from scratch around a lava lamp made with a WebGL shader.',
        'It was built using React and Vite. Most of the page reacts to how far you have scrolled, and each project has its own case study page.',
      ],
    },
    {
      type: 'text',
      heading: 'The First Version',
      paragraphs: [
        'The first version was built at the end of 2025 using React and React Router. The hero had a typing effect that cycled through areas of study, the projects were laid out in a grid of cards, and each project opened to a page with a text carousel.',
        'It did the job, but the carousel hid most of the writing since only one slide showed at a time, and the design felt pretty generic. The goals for the redesign were case studies that are easy to read and something memorable on the home page.',
      ],
    },
    { type: 'image', src: oldHome, alt: 'Old Portfolio Home', caption: 'The first version of my portfolio.', ratio: '16 / 10' },
    { type: 'pair', caption: 'Old Projects and Case Study Pages', ratio: '16 / 10', items: [{ src: oldProj, alt: 'Old Projects Page' }, { src: oldStudy, alt: 'Old Case Study Page' }] },
    {
      type: 'text',
      heading: 'The Lava Lamp',
      paragraphs: [
        'The lava lamp is a fragment shader. For every pixel it shoots a ray into the scene and steps forward until it hits a blob, this is called raymarching. It was built up one step at a time, starting with a single sphere, then lighting it using its surface normals, then melting two spheres together with a smooth minimum, and finally eight blobs that drift around on their own.',
        'Once the shape was right the focus moved to how it looked. The blobs are lit from the top left with a little orange and have a blue edge, so they stay in the background and don\'t fight with the text.',
      ],
    },
    { type: 'pair', caption: 'Early Shader Iterations', ratio: '16 / 10', items: [{ src: normals, alt: 'Surface Normals' }, { src: melt, alt: 'Melting Spheres' }] },
    { type: 'image', src: shading, alt: 'Final Blob Shading', caption: 'The blobs with their final shading.', ratio: '16 / 10' },
    {
      type: 'text',
      heading: 'Scroll Effects',
      paragraphs: [
        'A lot of the page reacts to scrolling. The name in the hero untypes as you scroll away, the lava lamp breaks up into bigger and bigger pixels while the blobs sink, and the ABOUT ME heading scrambles into PROJECTS. The lava lamp comes back behind the contact section at the bottom, doing the same thing in reverse.',
      ],
    },
    {
      type: 'text',
      heading: 'Case Study Pages',
      paragraphs: [
        'Each project is its own data file with a list of blocks (text, images, image pairs, videos and links), and one page builds the case study from whatever blocks a project has. Adding a new project is just making a new file.',
      ],
    },
    {
      type: 'text',
      heading: 'Reflection',
      paragraphs: [
        'Overall I am really happy with how it turned out. The hardest part was the shader, it is a completely different way of thinking compared to normal web development. Building it in small steps and committing each one made it much easier to figure out what broke.',
        'If I were to continue working on this project, I would make the blobs react to the mouse and pause the lava lamp when it is off screen.',
      ],
    },
  ],
};
