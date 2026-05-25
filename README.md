# LERS.dev | Interactive Professional Portfolio

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Material UI](https://img.shields.io/badge/Material--UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)
[![i18next](https://img.shields.io/badge/i18next-26A69A?style=for-the-badge&logo=i18next&logoColor=white)](https://www.i18next.com/)

A premium, modern, fully responsive, and bilingual professional portfolio application. Built with **React 18**, **TypeScript**, and **Material UI (MUI v6)**, using a scalable modular architecture designed to showcase software engineering projects, real-world work experience, and technical certifications.

---

## 🌟 Key Features

* **🌐 Full Internationalization (i18n):** Smooth, real-time context and state switching between **English** and **Spanish** using `react-i18next`.
* **🎨 Premium UI/UX Implementation:** Built under the slate/dark modern design trend featuring custom *glassmorphism* navigation layers, fluid linear hover gradients, and multi-colored identity chips for primary technologies.
* **📱 Media-Centric Modals (Two-Column Layout):** Interactive dialog structures that retain native portrait aspect ratios for mobile showcases (such as Flutter apps) alongside strict engineering documentation.
* **⚡ High Performance Ecosystem:** Developed on top of Vite's ultra-fast bundling workflow, running strict path aliasing via `@/*` and asset indexing mapping from public static paths.
* **📈 Modular CV Architecture:** Centralized domain models decoupling data layer structures from layout views for scalable multi-section tracking (Experience, Skills, Education).

---

## 🛠️ Tech Stack & Architecture

* **Core:** React 18 & TypeScript
* **Build Tool & Bundler:** Vite
* **UI Components & Styling:** Material UI (MUI v6)
* **State & Internationalization:** `i18next` + `react-i18next`
* **Icons:** Material Icons (`@mui/icons-material`)

### Folder Structure Overview
The project follows a clean, modular feature-based architecture to guarantee proper decoupling of concerns:
```text
src/
├── assets/             # Global static media layouts
├── components/         # Shared global design layouts (Navbar, Base Wrapper)
├── data/               # Centralized CV static repositories
├── features/           # Feature-scoped domains
│   ├── cv/             # Experience, Skill matrices & Education sections
│   └── projects/       # Grids, dynamic filters & Custom Lightbox cards
├── locales/            # JSON structured dictionary locales (EN / ES)
└── theme/              # Custom MUI global design configuration tokens