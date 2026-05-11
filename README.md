# Software Requirements Specification (SRS)
## GitHub Buddy — Beginner's Git & GitHub Learning App

**Version:** 1.0.0
**Date:** May 11, 2026
**Author:** arushi025
**Contact:** singharu016@gmail.com

---

## 1. Introduction

### 1.1 Purpose
This document describes the software requirements for **GitHub Buddy**, an interactive web-based educational application. It is intended for developers, contributors, and stakeholders who need to understand the system's scope, features, and technical design.

### 1.2 Project Overview
GitHub Buddy is a beginner-friendly, single-page application (SPA) that teaches users how to use Git and GitHub from scratch. It provides structured learning modules, interactive checklists, code examples, and a progress tracking system — all in a clean, responsive UI.

### 1.3 Scope
The application covers:
- Git installation and environment setup
- Core Git commands and concepts
- GitHub platform usage
- Real-world Git workflow
- Pull Request creation guide
- Common error troubleshooting
- Hands-on practice tasks
- Quick reference cheat sheet

### 1.4 Intended Users
- Absolute beginners with no prior Git/GitHub experience
- Students learning version control for the first time
- Junior developers onboarding to team workflows

---

## 2. Overall Description

### 2.1 Product Perspective
GitHub Buddy is a standalone frontend web application. It requires no backend server or database. All user progress is stored locally in the browser via `localStorage`.

### 2.2 Product Functions
- Structured learning path across 9 topics
- Step-by-step guides with code snippets
- Copy-to-clipboard for all commands
- Interactive checklists for multi-step tasks
- Topic completion tracking with progress percentage
- Responsive sidebar navigation
- Animated cursor trail for visual engagement
- 404 error handling

### 2.3 Assumptions and Dependencies
- User has a modern web browser (Chrome, Firefox, Edge, Safari)
- JavaScript must be enabled
- No internet connection required after initial load (static app)
- Progress data is stored per browser (not synced across devices)

---

## 3. Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18.3.1 + TypeScript |
| Build Tool | Vite 5.4.19 |
| Routing | React Router DOM 6.30.1 |
| UI Components | shadcn/ui (Radix UI based) |
| Styling | Tailwind CSS 3.4.17 |
| Icons | Lucide React 0.462.0 |
| State (async) | TanStack React Query 5.83.0 |
| State (local) | localStorage via custom hook |
| Forms | React Hook Form + Zod |
| Notifications | Sonner (toast) |
| Testing | Vitest + Testing Library |
| Linting | ESLint 9.32.0 |

---

## 4. System Architecture

### 4.1 Folder Structure
```
github-buddy/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   │   └── ui/          # shadcn/ui primitives (40+ components)
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Route-level page components
│   ├── App.tsx          # Root component with routing
│   ├── main.tsx         # App entry point
│   └── index.css        # Global styles + CSS variables
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

### 4.2 Routing Structure
```
/                → Home (progress dashboard)
/setup           → Setup guide
/git-basics      → Git fundamentals
/github-basics   → GitHub platform guide
/workflow        → Complete workflow tutorial
/first-project   → First project walkthrough
/pr-guide        → Pull request guide
/errors          → Common errors & fixes
/practice        → Practice tasks
/cheatsheet      → Quick command reference
*                → 404 Not Found
```

---

## 5. Functional Requirements

### FR-01: Navigation
- The app shall provide a persistent sidebar with links to all 10 sections.
- The sidebar shall highlight the currently active route.
- On mobile devices, the sidebar shall collapse and be toggled via a hamburger menu.

### FR-02: Progress Tracking
- The app shall allow users to mark each of the 9 topics as complete.
- Progress shall be saved to `localStorage` and persist across browser sessions.
- The home page shall display overall completion percentage.
- Individual steps within topics (e.g., PR checklist) shall also be trackable.

### FR-03: Code Blocks
- All code snippets shall be displayed in styled code blocks.
- Each code block shall have a copy-to-clipboard button.
- Visual feedback shall confirm successful copy action.

### FR-04: Interactive Checklist
- The PR Guide page shall include an interactive checklist.
- Users shall be able to check/uncheck individual steps.
- Checklist state shall persist via the progress hook.

### FR-05: Topic Complete Button
- Each topic page shall have a "Mark as Complete" toggle button.
- Clicking it shall update progress state and show a toast notification.

### FR-06: Cheat Sheet
- The cheat sheet page shall list 19 essential Git commands.
- Each command shall be clickable to copy to clipboard.

### FR-07: Practice Tasks
- The practice page shall display 15 tasks across 5 difficulty levels.
- Levels: Beginner → Easy → Medium → Hard → Boss Level.

### FR-08: Error Guide
- The errors page shall document 6 common beginner Git mistakes with solutions.

### FR-09: Cursor Trail
- A canvas-based animated rainbow cursor trail shall be rendered on all pages.

### FR-10: 404 Handling
- Any undefined route shall render a custom Not Found page.

---

## 6. Non-Functional Requirements

### NFR-01: Performance
- Initial page load shall complete within 3 seconds on a standard broadband connection.
- Vite's code splitting and tree-shaking shall be used to minimize bundle size.

### NFR-02: Responsiveness
- The UI shall be fully functional on screen widths from 320px (mobile) to 1920px (desktop).
- Sidebar shall collapse on screens below the `lg` Tailwind breakpoint (1024px).

### NFR-03: Accessibility
- All interactive elements shall be keyboard navigable.
- Semantic HTML elements shall be used throughout.
- Color contrast shall meet WCAG 2.1 AA standards.

### NFR-04: Browser Compatibility
- The app shall support the latest 2 versions of Chrome, Firefox, Edge, and Safari.

### NFR-05: Maintainability
- All components shall be modular and reusable.
- TypeScript strict typing shall be enforced across the codebase.
- ESLint rules shall be followed for consistent code style.

### NFR-06: Data Persistence
- User progress shall not be lost on page refresh.
- Data shall be stored in `localStorage` under the key `github-helper-progress`.

---

## 7. UI Components

| Component | Description |
|---|---|
| `Layout` | Main wrapper with sidebar nav and content area |
| `PageHeading` | Reusable page header with emoji, title, subtitle |
| `SectionCard` | Card container for content sections |
| `CodeBlock` | Code display with copy-to-clipboard |
| `InteractiveChecklist` | Checkbox list for multi-step task tracking |
| `TopicCompleteButton` | Toggle button to mark topics complete |
| `CursorTrail` | Canvas-based animated cursor trail |
| `NavLink` | Router-aware navigation link wrapper |

---

## 8. Custom Hooks

| Hook | Purpose |
|---|---|
| `useProgress` | Manages topic and step completion state with localStorage persistence |
| `useMobile` | Detects mobile viewport for responsive behavior |
| `useToast` | Controls toast notification display |

---

## 9. Getting Started

### Prerequisites
- Node.js >= 18
- npm or bun

### Installation
```bash
git clone https://github.com/arushi025/github-buddy.git
cd github-buddy
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Run Tests
```bash
npm run test
```

---

## 10. License
This project is private and maintained by arushi025.
