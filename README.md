[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/farahroslend/scubasia)

# SCUBAsia - Interactive Frontend Development Milestone Project
Website for exploring scuba diving sites in Asia

<https://farahroslend.github.io/scubasia/SCUBAsia/>

## Overview
For the second project of my Code Institute Full Stack Web Developer course, I was tasked with building an interactive front-end site.
It builds on the first project's emphasis on HTML and CSS by introducing JavaScript, to create a dynamic and interactive site that responds to user input, and 
allows the user to manipulate data to alter what is presented to them on-screen.
I decided to create a "personality quiz"-style assessment, with the aim of working out which central Bristol venues (i.e. pubs and bars) meet the user's needs/preferences.
It asks the user a series of 12 questions, then suggests three Bristol pubs or bars that match their answers. In addition, the site uses the Google Maps and Google Places APIs
to retrieve data about the three suggested venues and presents that data on the results screen. This includes a Google Map, a Google photo, and place details such as the website URL
and Google reviews star rating.

The project uses JavaScript to achieve three aims: DOM manipulation to change the structure and styling of the page, creating the logic of the quiz to work out the three suggested
venues based on the user's answers, and access to the Google APIs to get and present data. There are two JavaScript files in the project: "scripts.js" for the varibles and functions,
and "venues.js" for the venue objects representing the venues the user can be suggested.

The site is split into three main views: the start page, the question slides, and the results page. Only one question is presented at a time, and the site uses buttons to start the
quiz, navigate through the questions, submit the user's answers, and return to the start. The site is responsive across different devices without any loss of core functionality.


## UX
My full UX documentation can be found in the ux-design folder, which can be found [here](ux-design).
This includes documents detailing my thoughts on the strategy and scope planes of this project, plus the basic structure and my skeleton wireframes.

### User Stories

* As a potential tourist, I want to know where are the diving hotspots in Asia and their names, so I can plan my next diving trip
* As a potential tourist, I want to see where the diving hotspots are on a map and how relatively how far away they are from each other, so I can plan for multiple site visits
* As a potential tourist, I want to read descriptions and look at pictures of the diving locations in Asia, so I know what the location has to offer suits my taste
* As a potential tourist, I want to be linked to the relevant diving agent, hotels and fancy restaurants websites for the site I'm interested in, so I can contact them for bookings
* As a potential toursit agent, I want to contact the owner of the SCUBAsia website, so that my hotel, restaurant, diving package for the site my company is at can be featured in the website (pending)


## Features
### Existing Features

1) /SCUBAsia landing page:
* Media responsive navigation bar that condenses the home, travel deals, contact page into a collapsible button when viewed on a small iPad or a mobile device
* Navigation bar that links to other pages (the home and travel deals page)
* World map that pans into the Asian region by default, with a zoom in and zoom out button user can use to adjust the map resolution to see other smaller islands nearby
* Markers on world map to show diving locations
* Markers that pops out the name of the diving area when clicked with the link to a part of the page with more travelling details for that clicked site, and hides it when other markers or other areas of the map is clicked

2) /SCUBAsia/travel_deals.html page:
* Descriptions and pictures of all the diving sites available on the landing page map
* Table containing information of where the holiday maker can stay in, places to eat and diving agents that can offer good package deals for either just diving, or diving + accomodation + food
* Links to companies that can provide the potential holiday maker good local food, a place to stay in and diving packages at the diving area the holiday maker is interested to go


### Future Features

* A contact page with a form for travel agents, restaurant and hotel owners can fill in to request for their companies or the diving site they are making business at to be featured in the map and the travel deals page 
* Fields would be 'Name', dropdown bar: Business/Personal, 'Company' (field only appears if business is selected), 'Comments/Request'.
* Send button for the form. Contents of the form will be submitted to the admin of the page via email


## Technologies Used
* [HTML5](https://www.w3.org/TR/2017/REC-html52-20171214/)

* [CSS3](https://www.w3.org/Style/CSS/)

* [Bootstrap Bare Template](https://www.w3.org/Style/CSS/)

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

  * To cutomise the markers on the map, link the markers to the appropriate name of the location and to the portion of webpage with the diving spot's descriptions.

* [OpenStreetMaps API](https://cloud.google.com/maps-platform/maps)/[Google Places API](https://cloud.google.com/maps-platform/places)

  * By connecting to Google APIs, my website can retrieve data to display to the user. Specifically, a Google Map and place details of each of the user's top three venues, which are decided based on the answers they selected for the quiz questions.

* [Git](https://git-scm.com/)

  * Used for version control and committing changes to GitHub.

* [GitHub](https://github.com/)

  * Used to host and publish my project files.

* [GitPod IDE](https://gitpod.io/)

  * The application I used to develop the project.


* [Google Fonts](https://fonts.google.com/)
  
  * Used to provide the Permanent Marker font.

## Testing 
* run `$ python3 -m http.server 8080` on Gitpod's CLI to preview website
* Used Google Chrome's Inspect Feature to improve layout design and troubleshoot bugs 

## Deployment
The project was coded in the GitPod IDE. I had previously installed the GitPod browser extension, which allows you to create a GitPod workspace with the click of a button in GitHub.
I first created a new repository in GitHub and then created the GitPod workspace, where I coded the project. 
I used Git within GitPod for version control, with all commits being pushed to the linked GitHub repository. As I was not working on a live website and I was the sole developer, I used only the master branch.

To publish my website in GitHub, I used GitHub Pages from the settings of my repository. After selecting the master branch as the source, my website project can be found here: <https://harclemadscam.github.io/second-milestone-project/>

## Credits
### Content
All text content was created by myself.
### Media
Images were sourced from: 

<https://www.pexels.com/>

<https://unsplash.com/>

<https://www.piqsels.com/>

The results page images are taken from the Google Places API, and are subject to change. An image credit is presented underneath the image that will update dynamically, in line with
Google's attribution policy.

### Acknowledgements
My design was partly inspired by this [guide](https://www.sitepoint.com/simple-javascript-quiz/), mostly for its use of slides to display the questions.

I made frequent use of [Stack Overflow](https://stackoverflow.com/) and the Google Maps API [documentation](https://developers.google.com/maps/documentation) for help and advice. 
The code used to access the Google APIs is based on the advice of their documentation, with some changes made to suit my goals.

To create the background gradient, text shadow, and box shadow effects, I used the following online tools: [Here](https://cssgradient.io/), [Here](https://html-css-js.com/css/generator/text-shadow/) and [Here](https://www.cssmatic.com/box-shadow).