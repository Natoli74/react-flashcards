import { useState } from "react";
import "./App.css";

function App() {
  // React education flashcards data (question / answer pairs)
  const rawCards = [
    {
      question: "What is JSX?",
      answer:
        "JSX is a syntax extension that looks like HTML inside JavaScript. It compiles to React.createElement calls.",
    },
    {
      question: "What are props in React?",
      answer:
        "Props (properties) are read-only inputs passed from parent to child components to configure them.",
    },
    {
      question: "What is state in React?",
      answer:
        "State is internal, mutable data managed inside a component (via useState or class state) used to control rendering.",
    },
    {
      question: "What does useState return?",
      answer:
        "An array with [value, setValue] where setValue updates the state and triggers a re-render.",
    },
    {
      question: "What is a React component?",
      answer:
        "A component is a reusable piece of UI defined as a function or class that returns React elements.",
    },
    {
      question: "Why use keys in lists?",
      answer:
        "Keys help React identify changed items in lists so it can minimize DOM updates and preserve state.",
    },
    {
      question: "What is a hook?",
      answer:
        "A hook is a special function (like useState, useEffect) that lets you use React features in functional components.",
    },
    {
      question: "What does useEffect do?",
      answer:
        "useEffect runs side effects after render. It can run on mount, on updates when dependencies change, or on unmount.",
    },
    {
      question: "What is lifting state up?",
      answer:
        "Moving shared state to the nearest common ancestor so multiple components can access and update it via props.",
    },
    {
      question: "What is reconciliation?",
      answer:
        "Reconciliation is React's diffing algorithm that determines how to update the DOM efficiently when state/props change.",
    },
    {
      question: "When should you use useMemo?",
      answer:
        "useMemo memoizes expensive calculations between renders — use it when computations are costly and inputs rarely change.",
    },
    {
      question: "What is the virtual DOM?",
      answer:
        "A lightweight in-memory tree of React elements that React diffs against to compute minimal real DOM updates.",
    },
  ];

  // shuffle helper (Fisher-Yates)
  function shuffle(array) {
    const a = array.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const cardSet = {
    title: "React Basics",
    description:
      "Core concepts and quick reminders for modern React development.",
    cards: rawCards,
  };

  const total = cardSet.cards.length;
  const [cards, setCards] = useState(() => shuffle(cardSet.cards));
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  function flip() {
    setFlipped((f) => !f);
  }

  function nextCard() {
    if (total <= 1) {
      setFlipped(false);
      return;
    }
    // move sequentially through the shuffled set to avoid immediate repeats
    const next = (index + 1) % total;
    setIndex(next);
    setFlipped(false);
  }

  function reshuffle() {
    const newCards = shuffle(cards);
    setCards(newCards);
    setIndex(0);
    setFlipped(false);
  }

  const current = cards[index];

  return (
    <div id="root" className="bg-gradient">
      <header className="app-header">
        <h1>{cardSet.title}</h1>
        <p className="description">{cardSet.description}</p>
        <p className="meta">{total} cards • randomized</p>
      </header>

      <main>
        <div className="flashcard-container">
          <div
            className={`flashcard ${flipped ? "flipped" : ""}`}
            onClick={flip}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                flip();
              }
              if (e.key === "ArrowRight") {
                nextCard();
              }
            }}
            aria-pressed={flipped}
          >
            <div className="flashcard-inner">
              <div className="flashcard-front">
                <div className="card-content">
                  <h2>Question</h2>
                  <p className="qa-text">{current.question}</p>
                </div>
              </div>
              <div className="flashcard-back">
                <div className="card-content">
                  <h2>Answer</h2>
                  <p className="qa-text">{current.answer}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="controls">
          <button onClick={nextCard} className="next-btn">
            Next
          </button>
          <button onClick={reshuffle} className="shuffle-btn">
            Shuffle & Start
          </button>
          <button onClick={() => setFlipped(false)} className="reset-btn">
            Show Question
          </button>
          <p className="index-indicator">
            {index + 1} / {total}
          </p>
        </div>

        <footer className="footer-note">
          Tip: click the card or press Enter to flip. Use ArrowRight to go next.
        </footer>
      </main>
    </div>
  );
}

export default App;
