//DEVEN WEEDEN 2026
import hero from '../assets/weatherbuddy1.png';
import home from '../assets/weatherbuddy2.png';
import details from '../assets/weatherbuddy3.png';
import map from '../assets/weatherbuddy4.png';

export default {
  slug: 'weatherbuddy',
  title: 'Weather Buddy',
  summary: 'Mobile weather app built in FlutterFlow.',
  role: 'Developer',
  cover: hero,
  coverAlt: 'Weather buddy hero',
  tools: ['FlutterFlow'],
  accent: 'periwinkle',
  featured: false,
  body: [
    {
      type: 'text',
      heading: 'Overview',
      paragraphs: [
        'This project is a mobile weather application built using FlutterFlow that retrieves live weather data from a third-party weather API. It was created as a student project with the goal of gaining experience working with APIs in a mobile environment and understanding how data flows through a FlutterFlow application.',
        'The app was built using FlutterFlow and integrates a REST-based weather API. API responses are returned in JSON format and mapped to app state variables, which are then used to populate UI components. FlutterFlow\'s visual workflow was used to manage navigation and UI updates, while custom configuration was used for API calls and data handling.',
      ],
    },
    { type: 'link', href: './weatherbuddy.apk', label: 'Download Android APK' },
    {
      type: 'text',
      heading: 'Core Functionality',
      paragraphs: [
        'The core functionality of the app allows users to search for a location and view current weather conditions such as temperature, precipitation, and wind. When a user submits a search, the app sends a request to the weather API, processes the returned data, and updates the interface dynamically without requiring a restart or reload.',
        'Weather data is retrieved through centralized API calls configured within FlutterFlow rather than being tied directly to individual screens. This helped reduce duplicated logic and made it easier to manage loading states and error handling. Once data is returned, it is stored in state variables that are shared across relevant screens, keeping the UI and data layers clearly separated.',
      ],
    },
    { type: 'pair', caption: 'Home and map screens on mobile.', ratio: '9 / 19.5', items: [{ src: home, alt: 'Home Screen' }, { src: map, alt: 'Map Screen' }] },
    {
      type: 'text',
      heading: 'Reflection',
      paragraphs: [
        'The final application successfully retrieves live weather data and displays it in a clear, readable format. Users can search for different locations and view updated weather information without performance issues. The app meets the project requirements and demonstrates effective use of APIs within FlutterFlow.',
        'If I were to continue developing this project, I would add support for hourly and multi-day forecasts, improve error messaging for edge cases, and implement caching to reduce repeated API calls. I would also explore adding location-based weather using device permissions to streamline the search process.',
      ],
    },
    { type: 'image', src: details, alt: 'Details Screen', caption: 'Weather details for a searched location.', ratio: '1 / 1' },
  ],
};
