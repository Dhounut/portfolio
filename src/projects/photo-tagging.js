//DEVEN WEEDEN 2026
import hero from '../assets/tagHelpHero.png';

export default {
  slug: 'photo-tagging-script',
  title: 'Photo Tagging Script',
  summary: 'Script developed to speed up archival image tagging process',
  role: 'Student Marketing Specialist',
  timeline: 'Summer 2026',
  cover: hero,
  coverAlt: 'Tag helper hero',
  tools: ['PowerShell', 'ExifTool'],
  accent: 'amber',
  featured: false,
  body: [
    {
      type: 'text',
      heading: 'Overview',
      paragraphs: [
        'imgTagger was a script I developed as part of my positon as a Student Marketing Specialist. I grew tired of the slow image tagging process so I wrote this script to automate parts of it.',
        'The script does two things, it can GET tags and SET tags. GET tags goes through all files in a folder and returns a list of all of their tags into tags.txt, SET tags goes through all images in a folder and applies the tags listed in tags.txt to them.',
        'This script helped speed up the process after I had tagged the images, it allowed me to quickly get all the tags I applied (they varied image by image) and be able to paste them into the tags spreadsheet. SET allowed me to quickly move the tags that I applied in the HR folders into the LR folders, instead of having to manually enter all the tags again.'
      ],
    },
    { type: 'link', href: 'https://github.com/Dhounut/imgTagHelper', label: 'View the code on GitHub' },
    {
      type: 'text',
      heading: 'The Problem',
      paragraphs: [
        'The issue was that due to the specificity with which we had to tag the photos it led to bottleneck where after all the tags had been entered into the HR folder, I would need to one by one check the tags on each image and upload them into a spreadsheet. I would also need to ensure that the tags in the LR folder matched those in the HR folder for each event. These two tasks took three times as long as the inital tagging did, which slowed down our progress on tagging all the images.',
      ],
    },
    {
      type: 'text',
      heading: 'How It Works',
      paragraphs: [
        'When you run the script it asks for the path to the folder with the images you want to tag / get tags from. Once the path is entered it asks if you want to GET or SET tags. Once you\'ve seleted your desired function it will automatically complete it.',
        'Both functions use tags.txt as a place to store / read tags. I used exiftools to allow the script to be able to set image tags.',
      ],
    },
  ],
};
