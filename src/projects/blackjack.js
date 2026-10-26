//DEVEN WEEDEN 2026
import hero from '../assets/blackjackgame.png';
import story from '../assets/blackjackstory.png';
import end from '../assets/blackjackend.png';
import heroVid from '../assets/blackjackvid.mp4';

export default {
  slug: 'blackjack',
  title: 'Blackjack Game',
  summary: 'Choose your own adventure casino story with a playable blackjack game',
  role: 'Developer',
  timeline: '2025',
  cover: hero,
  coverVideo: heroVid,
  coverAlt: 'Blackjack free play',
  tools: ['JavaScript', 'HTML/CSS'],
  accent: 'amber',
  featured: false,
  body: [
    {
      type: 'text',
      heading: 'Overview',
      paragraphs: [
        'This project was a choose your own adventure game made for my Client Programming class (ISTE-340). We were tasked with making a story where every choice is made with a dropdown, and all of the dropdowns had to be created with JavaScript from a data set instead of being written into the HTML.',
        'This one is set in a casino, and it goes a bit further than the assignment with a whole game of blackjack built in. It ended up being a lot of fun to make.',
      ],
    },
    { type: 'link', href: 'https://people.rit.edu/dew7138/340/proj1/', label: 'Play the game' },
    { type: 'link', href: 'https://github.com/Dhounut/Blackjack', label: 'View the code on GitHub' },
    {
      type: 'text',
      heading: 'The Story',
      paragraphs: [
        'The whole story is stored in one object where each choice points to the next menu. When you pick an option the script finds that choice, makes a new select box for it and fades it in. If you go back and change an earlier answer it removes all the menus after it, so the page always matches the path you are on.',
        'To show the code was generic there is also a second data set, a quiz that figures out your favorite color, it runs on the exact same functions as the casino.',
      ],
    },
    { type: 'image', src: story, alt: 'Story Menus', caption: 'Each choice adds a new menu.', ratio: '16 / 10' },
    {
      type: 'text',
      heading: 'Blackjack',
      paragraphs: [
        'If you sit down at the table you get to play. The cards come from a small data set, aces are worth 1 or 11 depending on your score, and the dealer keeps drawing until they get to 16. Every card shows up in a log in the middle of the screen with a short delay between each one to add some tension.',
        'You can hit, stay, or fold. If it\'s a draw you get sent back into the story to try again, in a real casino that would just be a loss so this version of blackjack is actually fair.',
      ],
    },
    {
      type: 'text',
      heading: 'Ending and Free Play',
      paragraphs: [
        'When the story ends it shows the path you took and a form to make a profile. The form is validated and sanitized, and your username and email get saved in local storage so they are filled in next time.',
        'Finishing also sets a cookie (or a local storage flag if cookies are off) that unlocks Free Play, which is an endless version of blackjack that keeps track of your wins, losses and draws.',
      ],
    },
    { type: 'image', src: end, alt: 'Ending Screen', caption: 'The ending and profile form.', ratio: '16 / 10' },
    {
      type: 'text',
      heading: 'Reflection',
      paragraphs: [
        'Overall it turned out well, especially since it went way past what the assignment asked for. If I were to continue working on this project, I would use a real deck, right now each card is picked at random from all thirteen so you could get five aces in a row. I would also show actual cards instead of a text log, and clean up how the menus get removed since a few spots needed failsafes to stop them from stacking up.',
      ],
    },
  ],
};
