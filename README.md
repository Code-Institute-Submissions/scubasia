[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/farahroslend/scubasia)

# SCUBAsia - Interactive Frontend Development Milestone Project
Website for exploring scuba diving sites in Asia. 
Also hosts descriptions on what are the highlights in the diving area such as the flora and fauna that's endemic to that region, local attractions like restaurants to try out and diving packages that can inspire the holiday maker to plan for a visit.
<https://farahroslend.github.io/scubasia/SCUBAsia/index.html>



## UX
The theme for the project is minimalism (straight-to-the-point), with an oceanic colour code.

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

* [Bootstrap Bare Template](https://startbootstrap.com/templates/bare/)

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

  * To cutomise the markers on the map, link the markers to the appropriate name of the location and to the portion of webpage with the diving spot's descriptions.

* [OpenStreetMaps API](https://www.openstreetmap.org/#map=6/4.116/109.455)

  * Free no-register, no need for credit card details to access API key for the map  

* [Git](https://git-scm.com/)

  * Used for version control and committing changes to GitHub.

* [GitHub](https://github.com/)

  * Used to host and publish my project files.

* [GitPod IDE](https://gitpod.io/)

  * The application I used to develop the project.


* [Google Fonts](https://fonts.google.com/)
  
  * Used to provide the Permanent Marker font.

## Version Control
* Development of the website using the Gitpod IDE, launched by including `gitpod.io/#` at the beginning of the SCUBAsia Github repository, as prescribed by Github [here] (https://www.gitpod.io/docs/getting-started/)
* Accidentally installed a branched version of the repository in Gitpod farahroslend/gitpod-setup, thereby needing pull requests to merge the new versions of the codes with the master branch
* Used the following commands in the CLI in Gitpod to for version control:
    * `git add .`
    * `git commit -m "...insert comment here..."`
    * `git push`

## Testing 

### Tools
* W3C CSS Validation Service (https://jigsaw.w3.org/css-validator/).
* W3C Markup Validation Service (https://validator.w3.org/).
* JavaScript codes (https://jshint.com/)
* run `$ python3 -m http.server 8080` on Gitpod's CLI to preview website
* Used Google Chrome's Inspect Feature to improve layout design and troubleshoot bugs 

### Debugging
* Map loads perfectly on the landing page, panning into the Asia region with functional zoom in and out buttons
* Map displays all the markers for the diving spots, when webpage is loaded in all 3 viewing port sizes (large, medium, small), and the name of the location pops up when clicked 
* Marker pops up the names of the diving location with the link to a page with more details on the area, when clicked. Need to use `coordinate` in the javascript codes to view the OpenStreetMap coordinates to pin the location name pop up close to where the marker is. This code is removed after deployment.
* Links at the markers ushers user to the right section of the travel deals page 
* Links to external travel vendors works well
* Pop up closes when other markers or anywhere else are clicked 
* Navigation bar contents links to the right pages when clicked


### Media Responsiveness
* On large screens, nav bar displays all the contents it hosts in its div
* On small screens, the nav bar condenses the right half of the contents of its div (home, travel deals, contact us) into a collapsible button
* Since the design of the website is minimalistic, there is not much need to significantly change the layout of the other divs, and so the divs would re-scale relative to the size of the viewing port using css elements `height: 50vh` and `width: 50vw` to keep the scale of the map, images appropriate.


## Deployment
For publish my website in Github pages, I've followed the following steps as recommended by GitHub [here](https://docs.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site):
* On GitHub, navigate to my site's [repository](https://github.com/farahroslend/scubasia) 
* Go to Settings > Options > GitHub Pages
* Master branch, /root selected as publishing source
* Saved

The deployed website is live [here](https://farahroslend.github.io/scubasia/SCUBAsia/index.html). 
`/SCUBAasia/index.html` added at the end of the deployed link, since the master branch has multiple folders to also host the Bootstrap Bare Template, and its dependencies.


## Credits
### Content
From [WikiTravels](https://wikitravel.org/en/Main_Page)

### Media
Images were sourced from: [Google Images](https://www.google.com/imghp?hl=EN), [Pintrest](https://www.pinterest.com/)

### Acknowledgements
* Used Bootstrap Bare Templates to set up the navigation bar and landing page, with some customisation to fit the theme of this project.
* Significantly modified some javascript codes from [here](https://openstreetmap.be/en/projects/howto/openlayers.html) to create more markers, add description at the relevant markers when clicked with link to the diving spot's decriptions and travel deals.