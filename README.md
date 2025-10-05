# WEB102 Project 3 — React Flashcards (React Basics) Pt. 2

Submitted by: **Natoli Tesgera**

Time spent: **2** hours

React Flashcards is a single-page React + Vite application that provides a focused set of study flashcards for React concepts. The app is intended as a lightweight learning tool to review questions and answers, shuffle cards, and navigate using mouse or keyboard.

---

## Requirements Checklist

Required features implemented:

- [x] The user can enter their guess into an input box before seeing the flipside of the card
- [x] Application features a clearly labeled input box with a submit button where users can type in a guess
- [x] Clicking on the submit button with an incorrect answer shows visual feedback that it is wrong
- [x] Clicking on the submit button with a correct answer shows visual feedback that it is correct
- [x] The user can navigate through an ordered list of cards
- [x] A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
- [x] A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
- [x] Both the next and back buttons have visual indication and are disabled at the ends (no wrap-around)

Optional / Stretch features implemented:

- [x] Users can use a shuffle button to randomize the order of the cards ("Shuffle")
- [x] Cards remain in the same sequence (NOT randomized) unless the shuffle button is clicked
- [x] A user’s answer may be counted as correct even when it is slightly different from the target answer (case-insensitive, punctuation ignored, partial match accepted)

---

Notes:

- Subtle UI feedback is implemented with colored badges for correct/incorrect answers and input border colors.
- The submit action reveals the answer side of the card so users can compare their guess to the card answer.

## Video Walkthrough

Here's a walkthrough of implemented features:

<img src='src/assets/web102_p3.gif' title='Video Walkthrough' width='600' alt='Video Walkthrough'/>

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
