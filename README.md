# Rakesh Behera - Professional .NET Full Stack Developer Portfolio

A modern, attractive, and fully responsive single-page developer portfolio website built with **React.js**, **Bootstrap 5**, **Bootstrap Icons**, and **Vite**.

---

## 🚀 Live Local Development

The project is pre-configured and ready to run with Vite:

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build
```

The application will be served locally at `http://127.0.0.1:5173/`.

---

## 🛠️ Tech Stack & Libraries

- **Frontend Core:** React.js 19, JavaScript (ES6+), HTML5
- **Styling:** CSS3 (Modern Dark Theme, Glassmorphism, CSS Custom Properties), Bootstrap 5.3
- **Iconography:** Bootstrap Icons (1.13+)
- **Build Tool:** Vite 8
- **Typography:** Google Fonts (*Plus Jakarta Sans* & *JetBrains Mono*)

---

## 📂 Project Architecture

```text
d:/Rakesh_P/
├── public/
│   ├── profile.jpg              <-- Developer profile portrait photo
│   ├── resume.pdf               <-- Downloadable resume document
│   └── projects/
│       ├── project1.jpg         <-- Employee Management System preview
│       ├── project2.jpg         <-- REST API Management System preview
│       ├── project3.jpg         <-- Full Stack Authentication App preview
│       └── project4.jpg         <-- Business Management Dashboard preview
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           <-- Sticky navbar, scrollspy, mobile hamburger
│   │   ├── Hero.jsx             <-- Hero introduction, status badge, portrait, CTAs
│   │   ├── About.jsx            <-- Experience narrative & statistics cards
│   │   ├── Skills.jsx           <-- Categorized skill cards with filter tabs
│   │   ├── Experience.jsx       <-- Vertical career timeline (A2R Software Consulting Private Limited)
│   │   ├── Projects.jsx         <-- 4 featured project cards with interactive details modal
│   │   ├── Education.jsx        <-- MCA degree & academic concentrations
│   │   ├── Services.jsx         <-- 4 core service cards with deliverables
│   │   ├── Contact.jsx          <-- Interactive contact form & contact details
│   │   └── Footer.jsx           <-- Copyright, social links, back-to-top button
│   ├── App.jsx                  <-- Single-page component assembly
│   ├── main.jsx                 <-- Bootstrap & CSS bundle initialization
│   └── index.css                <-- Modern dark glassmorphic design system
├── index.html                   <-- SEO meta tags, title, OpenGraph, font imports
├── package.json
└── vite.config.js
```

---

## ✏️ How to Replace Your Personal Information

All placeholders are clearly grouped at the top of their respective components:

### 1. Profile Picture
- **File location:** [public/profile.jpg](file:///d:/Rakesh_P/public/profile.jpg)
- **Action:** Replace this file with your own photo named `profile.jpg` (or change the path inside [src/components/Hero.jsx](file:///d:/Rakesh_P/src/components/Hero.jsx#L95)).

### 2. Resume PDF
- **File location:** [public/resume.pdf](file:///d:/Rakesh_P/public/resume.pdf)
- **Action:** Replace this file with your actual PDF resume named `resume.pdf`. The download buttons in the navbar and hero section automatically download this file.

### 3. Social Media Links (GitHub, LinkedIn, Email)
Edit the constants at the top of these three files:
- [src/components/Hero.jsx](file:///d:/Rakesh_P/src/components/Hero.jsx#L5-L9):
  ```javascript
  const GITHUB_URL = "https://github.com/your-username";
  const LINKEDIN_URL = "https://linkedin.com/in/your-profile";
  const EMAIL_ADDRESS = "your.email@example.com";
  ```
- [src/components/Footer.jsx](file:///d:/Rakesh_P/src/components/Footer.jsx#L8-L12):
  ```javascript
  const GITHUB_URL = "https://github.com/your-username";
  const LINKEDIN_URL = "https://linkedin.com/in/your-profile";
  const EMAIL_ADDRESS = "your.email@example.com";
  ```
- [src/components/Contact.jsx](file:///d:/Rakesh_P/src/components/Contact.jsx#L6-L14):
  ```javascript
  const CONTACT_INFO = {
    email: "your.email@example.com",
    phone: "+91 98765 43210",
    location: "India (Open to Hybrid, On-site & Remote)",
    linkedIn: "https://linkedin.com/in/your-profile",
    gitHub: "https://github.com/your-username",
    availability: "Immediate Joiner (0 days notice)"
  };
  ```

### 4. Phone Number
- **File location:** [src/components/Contact.jsx](file:///d:/Rakesh_P/src/components/Contact.jsx#L8)
- Update `phone: "+91 XXXXX XXXXX"`.

### 5. Project Repositories & Live Demo URLs
- **File location:** [src/components/Projects.jsx](file:///d:/Rakesh_P/src/components/Projects.jsx#L8-L78)
- Update each project's `githubUrl` and `demoUrl` fields:
  - Project 1: *Employee Management System*
  - Project 2: *REST API Management System*
  - Project 3: *Full Stack Authentication Application*
  - Project 4: *Business Management Dashboard*

---

## ✨ Features Included

- **One-Page Navigation:** Smooth scrolling across all sections without page reloads (no React Router).
- **Sticky Navbar:** Smooth transition on scroll from transparent to frosted glass with active section spy.
- **Immediate Joiner Status:** Glowing green pulsing badge highlighting your availability for recruiters.
- **Interactive Skills Filter:** Instant filtering between Backend (.NET), Frontend, Database (SQL), and Tools.
- **Vertical Experience Timeline:** Beautiful modern timeline with A2R Software Consulting Private Limited (10 Months Internship), achievements, and technology chips.
- **Interactive Project Modal:** Click "Details" on any project to open a deep-dive modal with architecture and feature lists.
- **Interactive Contact Form:** Instant visual validation and success notification upon submission.
- **Floating Back-to-Top:** Automatically appears when scrolling down and smoothly scrolls back up.
- **SEO Optimized:** Complete meta tags, title, description, Open Graph, and mobile viewport settings in `index.html`.
