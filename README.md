# Phoenix_team_page

The following is a team page for the Phoenix Suns NBA franchise that I created for my final project for Code Louisville's front-end course. It includes a header, main site image, and four separate sections that display the team's schedule, roster, statistics, and team news.  

To access the main webpage, click on the index.html file. 

Each section includes a clickable link to an external website, with the exception of the team roster. The "see full roster" link in the roster section takes you to a separate webpage that I created using HTML tables. You can also view this separate webpage with the roster.html file. 

I designed this webpage using the mobile-first principle and included two media queries that adapt the layout for medium-sized screens and large screens. 

In the mobile layout, the header is positioned with a Suns logo button in the right-hand corner. Upon clicking on the Suns logo, a navigation menu will appear with clickable jump links to each of the four sections mentioned above. A team image is displayed beneath the header, followed by a single column that features each of the four sections. 

On medium-sized screens, the header no longer displays the Suns logo button, and the navigation menu is constantly visible in the right-hand corner. I used Flexbox to position this navigation menu in a vertical column. I also used CSS Grid to rearrange the sections by placing the main image in one stand-alone column, while the schedule and latest news appear side by side, and the statistics and roster sections are side by side at the bottom of the page. 

On large screens, the navigation is again visible at all times, while the layout of the body of the webpage changes further. Using CSS Grid, I positioned the team image and schedule side by side, while the roster section spans two rows, and the team news and statistics sections appear adjacent to the roster section in two separate rows.

Among the features I utilized for my Code Louisville project are: 

1. A navigation menu that alternates between horizontal and vertical styles at desktop and mobile sizes. While in mobile view, the navigation menu is hidden until the user clicks on the "hamburger" icon —- in this case, the Phoenix Suns basketball logo. Once the user clicks on the icon, a horizontal navigation menu is displayed. That menu then switches to a vertical style at 768px and larger. 

2. I used CSS Grid layout to position the Suns logo icon and H1 in the header. I also utilized CSS Grid to change the layout when the viewport is between 768px and 1024px, and 1025px or larger. As mentioned above, when the viewport is between 768px and 1024px, the main image is placed inside one stand-alone column, while the schedule and latest news appear side by side beneath the main image, and the statistics and roster sections are side by side at the bottom of the page. At 1025px or larger, the page is further rearranged into a two-column layout with sections at new locations.

3. I used “:nth-child” to change the background color for every other row in the HTML table on the roster page, which can be viewed by clicking the "see full roster" link or by opening the roster.html file. 

4. Using JavaScript, I was able to show and hide the navigation in mobile view when a user clicks on the Suns logo icon. Once the user clicks on the icon, the navigation menu appears. The user can make the navigation menu disappear from view by clicking on the Suns logo icon again.  

5. Using JavaScript, I also created a dropdown menu in the team schedule section. When clicking on the button, a menu will display two choices: you can either click on a link to the 2020-21 schedule or a link to the previous 2019-20 schedule.