//DEVEN WEEDEN 2026
import hero from '../assets/st-hero.png';
import sprites from '../assets/sprites.png';
import scrapbook from '../assets/scrapbook.png';
import oldStyle from '../assets/oldtourist.png';
import oldUi from '../assets/oldui.png';
import heroVid from '../assets/scrapbookvid.mp4';

export default {
  slug: 'scrapbook-tourist',
  title: 'Scrapbook Tourist',
  summary:
    'Tamagochi-inspiried browser extention that features a cute, interactive character that compiles a scrapbook of your internet adventures!',
  role: 'Design and Development',
  timeline: 'Spring 2026',
  cover: hero,
  coverVideo: heroVid,
  coverAlt: 'Scrapbook tourist hero',
  tools: ['Javascript', 'Chrome', 'Pixlr'],
  accent: 'amber',
  featured: false,
  body: [
    {
      type: 'text',
      heading: 'Overview',
      paragraphs: [
        'Scrapbook Tourist is a Tamagochi inspired browser extension that features a cute, interactive character that dynamically captures and compiles screenshots of your internet adventures into a scrapbook.',
        'The Tourist reacts to your browsing behavior, providing a playful and engaging experience while preserving your online memories.'
      ],
    },
    { type: 'image', src: scrapbook, alt: 'Scrapbook Tourist Scrapbook', caption: 'A glimpse into the Scrapbook Tourist extension.', ratio: '16 / 9' },
    {
      type: 'text',
      heading: 'Assignment Description',
      paragraphs: [
        'We were tasked with creating a tomogachi inspired character that would be able to react to the user\'s actions. The style, what the interaction would look like, and the overall aesthetic were all up to us to decide.',
      ],
    },
    
    {
      type: 'text',
      heading: 'Process',
      paragraphs: [
        'Scrapbook Tourist was designed and animated using Pixlr, and coded using Javascript, HTML5, and CSS. The design of the character went through many rounds of iteration.',
      ],
    },
    { type: 'pair', caption: 'Old Design Iterations', ratio: '4 / 3', items: [{ src: oldStyle, alt: 'Old Style Design' }, { src: oldUi, alt: 'Old UI Designs' }] },
    { type: 'image', src: sprites, alt: 'Final Sprite Sheets', caption: 'Final sprite sheets for the Scrapbook Tourist character.', ratio: '16 / 9' },
     {
      type: 'text',
      paragraphs: [
        'On the development side, the character was implemented as a browser extension using Javascript. The extension scrapes browser data and triggers animations and interactions based on that data. For example, when a user visits a travel related website, the tourist might say \'When are we leaving?\' and he will be more likely to capture a section of the page.',
      ],
    },
    {
      type: 'text',
      heading: 'Outcome',
      paragraphs: [
        'Overall I am extremely satisfied with the outcome of the Scrapbook Tourist project. The character is enagaing and I am particularly proud of the animations.',
      ],
    },
  ],
};
