# Our Team – Dynamic Team Page
[![Live Demo](https://img.shields.io/badge/live-demo-brightgreen)](https://js-our-team.netlify.app/)

## Project Overview
This project is a JavaScript-based web application that dynamically generates a responsive team page. 
All team members data is stored in an array of objects and rendered on the page at runtime using DOM manipulation. 
The exercise focuses on separating data and layout logic, while building a maintainable structure for displaying user profiles. 
Each team member is displayed as a card, generated dynamically when the page loads.

## Features

- **Data-Driven Content:** All team data (name, role, email, image) is stored in a JS array of objects.
- **Modular Rendering Functions:** Uses helper functions (`renderHTML`, `createHTMLElement`) for clear, reusable logic.
- **Dynamic DOM Manipulation:** Elements are created via JavaScript and inserted at runtime.
- **Separation of Concerns:** Clean division between data, logic, and structure.
- **Responsive Layout:** Built using modern flexbox layout with adaptive spacing and mobile compatibility.

## How It Works

- `renderHTML(parent, elements)` → Iterates through the array, composes the HTML string, and injects it via `.innerHTML`.
- `createHTMLElement(element)` → Generates the HTML markup for one card using a template literal.

## Tech Stack
- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **Netlify** for deployment

## Live Demo
**[js-our-team](https://js-our-team.netlify.app/)**



