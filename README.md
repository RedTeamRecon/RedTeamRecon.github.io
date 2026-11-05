David Nelson — Developer & Cybersecurity Portfolio

Welcome to the repository for my personal developer portfolio page! This site showcases my latest software development and cybersecurity projects, structured with semantic HTML5, custom CSS3 styling, and dynamic client-side scripting configured to run locally via XAMPP Apache.

Overview of Languages and Libraries

The portfolio is built using modern web standards and native browser APIs:

HTML5: Semantic document structuring (<header>, <main>, <section>, <footer>, <nav>) ensuring accessibility and clean layout architecture.

CSS3: Custom styling implementing CSS Variables, Flexbox, CSS Grid responsive layouts, and smooth transition properties.

JavaScript (ES6+): Manages dynamic DOM element creation, asynchronous event handling, user prompt interactions, and timed form confirmation animations.

sessionStorage API: Handles client-side caching to verify, store (JSON.stringify()), and parse (JSON.parse()) custom project JSON data objects on page load.

Dependencies and Runtime Requirements

This project is a lightweight, zero-external-dependency front-end application:

XAMPP (Apache Server): Required to serve the site locally over http://localhost.

Web Browser: Any modern browser supporting ES6 JavaScript, HTML5, and CSS3 (Google Chrome, Mozilla Firefox, Microsoft Edge, Apple Safari).

How to Run Locally via XAMPP Apache

Start Apache:

Open the XAMPP Control Panel.

Click Start next to the Apache module.

Deploy Project Files:

Locate your XAMPP root directory (C:\xampp\htdocs).

Create a project directory named portfolio.

Place your home.html, script.js, and this README.md file inside C:\xampp\htdocs\portfolio\.

Access in Browser:

Open your browser and navigate to: http://localhost/portfolio/home.html

The page will execute the dynamic JavaScript logic, prompt for your name, and render the projects dynamically via sessionStorage.
