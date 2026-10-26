//DEVEN WEEDEN 2026
import hero from '../assets/ischoolapp1.png';
import minors from '../assets/ischoolapp2.png';
import employment from '../assets/ischoolapp3.png';
import faculty from '../assets/ischoolapp4.png';

export default {
  slug: 'ischool-app',
  title: 'iSchool App',
  summary: 'Web app built on RIT\'s iSchool API.',
  role: 'Developer',
  cover: hero,
  coverAlt: 'iSchool app hero',
  tools: ['ASP.NET MVC'],
  accent: 'periwinkle',
  featured: false,
  body: [
    {
      type: 'text',
      heading: 'Overview',
      paragraphs: [
        'This project is a web application built to retrieve and display data from RIT\'s iSchool API using the Model-View-Controller (MVC) design pattern. It was created as a student project for a web development course, with the goal of practicing API consumption, data modeling, and separation of concerns in a real application.',
      ],
    },
    { type: 'link', href: 'https://github.com/Dhounut/iSchool-App', label: 'View the code on GitHub' },
    { type: 'image', src: minors, alt: 'Minors Page', caption: 'Minors page with course info from the API.', ratio: '16 / 10' },
    {
      type: 'text',
      heading: 'Technical Details',
      paragraphs: [
        'The application was built using ASP.NET MVC. The model layer is responsible for fetching and structuring data from the iSchool API, the controller handles requests and passes processed data to the views, and the view layer renders the information dynamically for the user. A key part of this project was building a reusable service to handle API requests. Rather than calling the API directly from the controller, I implemented a separate API service that manages HTTP requests, error handling, and JSON deserialization. This helped keep the controller logic clean and made the data layer easier to maintain and extend.',
        'The final application successfully retrieves data from multiple iSchool API endpoints and displays it across different views. Each view is driven by strongly typed models, which helped reduce runtime errors and made the codebase easier to reason about.',
      ],
    },
    { type: 'image', src: employment, alt: 'Employment Table', caption: 'Searchable employment table and map.', ratio: '16 / 10' },
    {
      type: 'text',
      heading: 'Reflection',
      paragraphs: [
        'If I were to continue working on this project, I would improve error messaging in the UI and add caching to reduce repeated API calls. I would also refactor parts of the API service to make it more configurable for additional endpoints.',
      ],
    },
    { type: 'image', src: faculty, alt: 'Faculty Directory', caption: 'The faculty and staff directory.', ratio: '3 / 2' },
  ],
};
