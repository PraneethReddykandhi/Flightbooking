BookMyFlight
BookMyFlight is a web-based application for booking domestic and international flights. This application allows users to search for flights, view sample flight results, enter passenger details, and create an account. It also provides contact information and details about the service.

Table of Contents
Features
Technologies Used
Project Structure
Setup
Usage
Functionality
Screenshots
License
Features
Home Page: Introduction to the flight booking service.
Flight Search: Users can search for one-way or round-trip flights.
Sample Flight Results: Displays sample flight results with a booking option.
Passenger Details: Form to enter passenger details before booking.
Sign In and Sign Up: User authentication functionality.
About Page: Provides information about BookMyFlight, including contact information.
Responsive Design: Works on desktop and mobile devices.
Technologies Used
HTML5: Markup language for structuring the web application.
CSS3: Styling for the user interface, including layout and responsive design.
JavaScript (jQuery): Client-side functionality for interactivity and DOM manipulation.
Project Structure
graphql
Copy code
BookMyFlight/
│
├── index.html          # Main HTML file containing all page sections
├── styles.css          # CSS file for styling the application
├── script.js           # JavaScript file for functionality
└── README.md           # Documentation file (this file)
Setup
Clone the repository or download the project files.
bash
Copy code
git clone https://github.com/PraneethReddykandhi/Flightbooking.git
Navigate to the project directory.
bash
Copy code
cd BookMyFlight
Open the index.html file in a web browser to view the application.
Usage
Home Page: Open the application to view the home page, which includes a button to search for flights.
Flight Search: Click on the Flights button in the navigation bar or Search button on the home page. Select Trip Type, Origin, Destination, Departure Date, and (if applicable) Return Date. Then, click Search to display sample flight results.
Booking: Click Book next to any sample flight to fill out the Passenger Details form.
Account Management:
Sign In: Click the Sign In button in the header to log in.
Sign Up: Click the Sign Up button in the header to create an account.
About Page: Click About or Contact in the navigation bar to view information about BookMyFlight and contact details.
Functionality
Home Page: Displays an introduction and a button to navigate to the flight search page.
Flight Search:
Allows selection of One-Way or Round Trip.
Disables the Return Date field if One-Way is selected.
After entering search criteria, sample flights are displayed with a Book button.
Passenger Details:
Displays a form to enter details such as First Name, Last Name, Email, Phone, Passport No, and Age.
Upon clicking Book, a confirmation message is displayed.
Sign In and Sign Up:
Sign In form has fields for Username and Password.
Sign Up form includes First Name, Last Name, Email, Username, Password, and Verify Password. It checks for matching passwords before submission.
About Page:
Provides information about BookMyFlight, domestic and international contact numbers, and a support email address.
Screenshots
Home Page

Flight Search

Passenger Details

About Page

Replace the path/to/ with the actual path to your screenshots.

License
This project is licensed under the MIT License. See the LICENSE file for details.
