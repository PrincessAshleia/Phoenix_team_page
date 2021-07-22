# Phoenix_team_page

The following is a team page for the Phoenix Suns NBA franchise. It includes a main site image of point guard Chris Paul and shooting guard Devin Booker, along with sections that display the team's schedule, roster, statistics, and team news.  

Each section includes a clickable link to an external website, with the exception of the team roster. The "see full roster" link in the roster section takes you to a new wepage with the team roster displayed using HTML tables. 

Among the features I utilized for my Code Louisville project, I created: 

    1) A navigation menu that alternates between horizontal and vertical styles at desktop and mobile sizes. While in mobile view, the navigation menu is hidden until the user clicks on the "hamburger" icon —- in this case, the Phoenix Suns basketball logo. Once the user clicks on the icon, a horizontal navigation menu is displayed. That menu then switches to a vertical style at 768px and larger. 

    2) I used CSS grid layout to position the Suns logo icon and H1 in the header. I also utilized CSS Grid to mix up the layout when the viewport is 1025px or larger. In this viewport, the layout changes from a single column to a two-column layout. The team image and schedule are aligned side by side at this viewport, while the roster and latest news fill up the next row of the grid. The stats section is in a row by itself.  

    3) I used “:nth-child” to change the background color for every other row in the HTML table on the roster page, which can be viewed by clicking the "see full roster link."

    4) Using JavaScript, I was able to show and hide the navigation in mobile view when a user clicks on the Suns logo icon. Once the user clicks on the icon, the navigation menu appears. The user can make the navigation menu dissapear from view by clicking on the Suns logo icon again.  