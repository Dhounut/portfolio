//DEVEN WEEDEN 2026
import hero from '../assets/whattoeathero.png';
import heroVid from '../assets/whattoeatvid.mp4';
import wheel1 from '../assets/whattoeatwheel1.png';
import wheel2 from '../assets/whattoeatwheel2.png';
import tourney2 from '../assets/whattoeattourney2.png';
import tourney3 from '../assets/whattoeattourney3.png';
import map1 from '../assets/whattoeatmap1.png';
import map2 from '../assets/whattoeatmap2.png';
import map3 from '../assets/whattoeatmap3.png';
import favs from '../assets/whattoeatfavorites.png';

export default {
  slug: 'what-to-eat',
  title: 'What to Eat?',
  summary: 'iOS app that helps you decide what to eat',
  role: 'Design and Development',
  timeline: 'Spring 2026',
  cover: hero,
  coverVideo: heroVid,
  coverAlt: 'what to eat hero',
  tools: ['Swift', 'Xcode'],
  accent: 'amber',
  featured: false,
  body: [
    {
      type: 'text',
      heading: 'Overview',
      paragraphs: [
        '\'What to Eat?\' is an app dedicated to answering the most difficult question \'what are we going to eat\'. It provides three ways to decide, a spinning wheel, a tournament, and a map of nearby restaurants. It also features a favorites system so you can always remember your favorite spots.',
        'The app was developed natively for iOS using Swift.',
      ],
    },
    { type: 'link', href: 'https://github.com/Dhounut/whattoeat', label: 'View the code on GitHub' },
    {
      type: 'text',
      heading: 'The Wheel',
      paragraphs: [
        'The wheel is the quickest way to decide. You add as many options as you want and hit spin, it lands on one at random and the winning slice lights up with its name shown under the wheel.',
      ],
    },
    { type: 'pair', caption: 'What to eat wheel', ratio: '9 / 19.5', items: [{ src: wheel1, alt: 'Wheel' }, { src: wheel2, alt: 'Wheel with winner' }] },
    {
      type: 'text',
      heading: 'Tournament',
      paragraphs: [
        'The tournament is for when you want a little more control. Your options go head to head two at a time and you pick which one you would rather have, this keeps going until only one is left.',
      ],
    },
    { type: 'pair', caption: 'Tournament', ratio: '9 / 19.5', items: [{ src: tourney2, alt: 'Tournament Match' }, { src: tourney3, alt: 'Tournament Winner' }] },
    {
      type: 'text',
      heading: 'Nearby',
      paragraphs: [
        'Nearby shows the restaurants around you on a map. Tapping a pin opens up a card where you can favorite it, share it, or get directions. You can also search for a specific restaurant.',
      ],
    },
    { type: 'pair', caption: 'Nearby map', ratio: '9 / 19.5', items: [{ src: map1, alt: 'Nearby Map' }, { src: map2, alt: 'Restaurant Card' }] },
    {
      type: 'text',
      heading: 'Favorites',
      paragraphs: [
        'You can switch Nearby to a list view if the map gets too crowded. Any restaurant you favorite gets saved to the Favorites screen so you can find it again later.',
      ],
    },
    { type: 'pair', caption: 'List view and favorites', ratio: '9 / 19.5', items: [{ src: map3, alt: 'Nearby List' }, { src: favs, alt: 'Favorites' }] },
  ],
};
