# HOTELIER PORTFOLIO WEBSITE

A high-performance, fully responsive full-stack portfolio web application designed for a **Hotelier Sales and Marketing Professional**. Built with React, Vite, Bootstrap, and Node.js serverless functions, this application serves as a central professional hub to highlight leadership achievements, career milestones, and business impact within the hospitality industry.

**Live Demo:** [https://www.majescamaclan.com](https://www.majescamaclan.com)  
**Frontend Repo:** [https://github.com/Danny-Brogno/hotelier-portfolio](https://github.com/Danny-Brogno/hotelier-portfolio)

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Installation](#installation)
- [Usage](#usage)
- [Future Improvements](#future-improvements)
- [Credits](#credits)
- [License](#license)

---

## Overview

### Motivation
In the competitive hospitality industry, static PDFs and standard LinkedIn profiles often fail to capture the full scope of a Sales and Marketing Director’s achievements. I built this project to provide a dedicated, modern digital presence that presents career highlights, revenue metrics, and strategic initiatives in an engaging, interactive format. Additionally, I designed the core codebase as a reusable, modular template that can be easily customized for future portfolio projects.

### Objective
This application addresses the challenge of professional personal branding in executive recruitment. It solves three main problems:
* **Visibility & Discoverability:** Optimizes online presence through technical SEO (achieving 100% SEO scores on Lighthouse) so recruiters and prospective employers can easily find the profile.
* **Direct Professional Inquiries:** Provides a seamless contact mechanism where visitors can send messages that route directly to a professional domain email address via an automated SendGrid backend.
* **Demonstrable Results:** Displays key hospitality metrics, career timelines, and interactive resume sections in a clean, fully responsive design optimized for mobile, tablet, and desktop viewing.

### Learning Outcomes
* **Serverless Backend Integration:** Built an automated contact form endpoint utilizing serverless functions integrated with the SendGrid API for zero-cost, reliable transactional emails.
* **Technical SEO & Analytics Optimization:** Implemented dynamic meta tags, structured `sitemap.xml`, and `robots.txt`, achieving >90% performance scores and 100% SEO scores on Google PageSpeed Insights.
* **Full-Stack Deployment Pipeline:** Configured custom DNS routing on Porkbun (including custom business email setup) and managed automated CI/CD static hosting deployment via Azure Static Web Apps.
* **Responsive Architecture with React & Vite:** Utilized Vite for rapid bundling, React Router for multi-page client-side routing, and Bootstrap to ensure full cross-device compatibility.

---

## Features

- **Responsive Navigation:** Smooth multi-page routing across Desktop, Tablet, and Mobile devices using React Router.
- **Serverless Contact Form:** Real-time email delivery integration using SendGrid API and Azure Serverless API functions.
- **Interactive Resume & Metrics:** Display of professional hospitality experience, revenue achievements, and core skills.
- **Performance & SEO Optimized:** Configured meta tags, `robots.txt`, and dynamic `sitemap.xml` for maximum search engine visibility and top-tier PageSpeed scores.
- **Custom Branding & Media:** Optimized asset loading, custom styling, and integrated media showcase.

---

## Tech Stack

### Frontend
- **React.js** (Client-side UI library)
- **Vite** (Build tool & development server)
- **React Router** (Client-side routing)
- **Bootstrap 5** & **Custom CSS3** (Responsive design & layout)
- **HTML5**

### Backend
- **Azure Functions / Node.js** (Serverless backend API)
- **SendGrid API** (Transactional email service)
- **REST API** Architecture

### Tools & Hosting
- **Git & GitHub** (Version control & repository)
- **VS Code** (IDE)
- **Porkbun** (Domain registrar & custom business email setup)
- **Azure Static Web Apps** (Hosting, CI/CD pipeline, and serverless API integration)
- **Google Search Console & Lighthouse** (SEO & performance testing)

---

## Architecture

```text
hotelier-portfolio
├── README.md
├── api
│   ├── contact
│   │   ├── function.json
│   │   └── index.js
│   ├── host.json
│   └── package.json
├── eslint.config.js
├── index.html
├── src
│   ├── App.jsx
│   ├── assets
│   │   ├── hotel-lobby.jpg
│   │   └── profile.png
│   ├── components
│   │   ├── footer.jsx
│   │   ├── navbar.jsx
│   │   └── template.jsx
│   ├── main.jsx
│   ├── pages
│   │   ├── contactpage.jsx
│   │   ├── homepage.jsx
│   │   └── resumepage.jsx
│   ├── style-danny.css
│   └── style-tricsy.css
└── vite.config.js
```

## Installation

Clone the Repository.

From your terminal run these commands:

```bash
git clone https://github.com/Danny-Brogno/hotelier-portfolio.git
```

```bash
cd hotelier-portfolio
```

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

## Usage
Navigate the Site: Use the navbar to switch between the Home, Resume, and Contact pages.

Review Experience & Metrics: Explore career milestones, key hospitality sales performance metrics, and qualifications.

Send Inquiries: Submit a message via the Contact page form to send an automated transactional email directly to the portfolio owner.

## Future Improvements
Add unit and integration testing using Vitest / React Testing Library.

Implement animated UI page transitions.

Build an admin dashboard for dynamic content management.

## Credits
Developer: Danny Brogno

GitHub: https://github.com/Danny-Brogno

## License
This project is licensed under the MIT License.
