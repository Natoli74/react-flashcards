# WEB102 Project 2 — React Flashcards (React Basics)

Submitted by: **Natoli Tesgera**

Time spent: **2** hours

React Flashcards is a single-page React + Vite application that provides a focused set of study flashcards for React concepts. The app is intended as a lightweight learning tool to review questions and answers, shuffle cards, and navigate using mouse or keyboard.

---

## Completed Features (high level)

The following functionality is implemented in this project:

- [x] Single-card view with question (front) and answer (back) that flips on click.
- [x] Randomized card order on load and a Shuffle & Restart control.
- [x] Next / Previous navigation including keyboard support (← / →) and Enter/Space to flip.
- [x] Responsive layout and accessible attributes for interactive elements.

Optional / UX improvements implemented:

- [x] Category visual accents (Basics / Intermediate / Advanced) and a legend.
- [x] Smooth flip/transition animations and a subtle glass-like UI treatment.
- [x] Polished controls (buttons, counters) and improved visual hierarchy.

---

## Video Walkthrough

Here's a walkthrough of implemented features:

<img src='src/assets/web102_p2.gif' title='Video Walkthrough' width='600' alt='Video Walkthrough'/>

GIF created with [Ezgif](https://ezgif.com/) 



---

## Project structure

- public/ — static assets served by Vite
- src/
  - App.jsx — main application (flashcard data, shuffle logic, UI)
  - App.css — application styles (layout, card styles, animations)
  - index.css — global resets and utilities
  - main.jsx — app entry
  - assets/ — images and demo GIFs used in README or UI

---

## Setup / Run

1. Install dependencies

   npm install

2. Start dev server

   npm run dev

3. Open the app in the browser at the URL printed by Vite (usually http://localhost:5173)

---

## Notes / Development

- Card data lives directly in `src/App.jsx` as a small array of question/answer objects. For a larger dataset consider moving cards to a JSON file or an API and lazy-loading/pagination.
- Accessibility: interactive card wrapper uses `role="button"`, `tabIndex={0}`, and keyboard handlers for Enter/Space and arrow navigation.
- UX: the app includes shuffle/random selection, a visible counter, and a category legend to give quick context.
- Styling: implemented with plain CSS in `src/App.css` (no external CSS framework). The design uses gradients, glass-like panels, and responsive sizing.


---

## License

This project includes a LICENSE file in the repository. See `LICENSE` for license details.

---
