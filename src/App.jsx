import { useState } from "react";
import "./App.css";

function App() {
  // React education flashcards data (question / answer pairs)
  const rawCards = [
    {
      question: "What is JSX?",
      answer:
        "JSX is a syntax extension that looks like HTML inside JavaScript. It compiles to React.createElement calls.",
      category: "basics",
    },
    {
      question: "What are props in React?",
      answer:
        "Props (properties) are read-only inputs passed from parent to child components to configure them.",
      category: "basics",
    },
    {
      question: "What is state in React?",
      answer:
        "State is internal, mutable data managed inside a component (via useState or class state) used to control rendering.",
      category: "intermediate",
    },
    {
      question: "What does useState return?",
      answer:
        "An array with [value, setValue] where setValue updates the state and triggers a re-render.",
      category: "intermediate",
    },
    {
      question: "What is a React component?",
      answer:
        "A component is a reusable piece of UI defined as a function or class that returns React elements.",
      category: "basics",
    },
    {
      question: "Why use keys in lists?",
      answer:
        "Keys help React identify changed items in lists so it can minimize DOM updates and preserve state.",
      category: "intermediate",
    },
    {
      question: "What is a hook?",
      answer:
        "A hook is a special function (like useState, useEffect) that lets you use React features in functional components.",
      category: "intermediate",
    },
    {
      question: "What does useEffect do?",
      answer:
        "useEffect runs side effects after render. It can run on mount, on updates when dependencies change, or on unmount.",
      category: "advanced",
    },
    {
      question: "What is lifting state up?",
      answer:
        "Moving shared state to the nearest common ancestor so multiple components can access and update it via props.",
      category: "intermediate",
    },
    {
      question: "What is reconciliation?",
      answer:
        "Reconciliation is React's diffing algorithm that determines how to update the DOM efficiently when state/props change.",
      category: "advanced",
    },
    {
      question: "When should you use useMemo?",
      answer:
        "useMemo memoizes expensive calculations between renders — use it when computations are costly and inputs rarely change.",
      category: "advanced",
    },
    {
      question: "What is the virtual DOM?",
      answer:
        "A lightweight in-memory tree of React elements that React diffs against to compute minimal real DOM updates.",
      category: "advanced",
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
    // Pick a random card (requirement: "random new card")
    const randomIndex = Math.floor(Math.random() * total);
    setIndex(randomIndex);
    setFlipped(false);
  }

  function prevCard() {
    if (total <= 1) {
      setFlipped(false);
      return;
    }
    const prev = (index - 1 + total) % total;
    setIndex(prev);
    setFlipped(false);
  }

  function reshuffle() {
    const newCards = shuffle(cards);
    setCards(newCards);
    setIndex(0);
    setFlipped(false);
  }

  const current = cards[index];

  // Get color based on category
  const getCategoryClass = (category) => {
    const colors = {
      basics: "card-basics",
      intermediate: "card-intermediate",
      advanced: "card-advanced",
    };
    return colors[category] || "card-default";
  };

  return (
    <div className="app-container">
      <div className="content-wrapper">
        {/* Header - displays title, description, and total cards */}
        <header className="app-header">
          <h1 className="title">{cardSet.title}</h1>
          <p className="description">{cardSet.description}</p>
          <p className="meta">{total} cards • randomized</p>
        </header>

        <main>
          {/* Flashcard display - single card at a time */}
          <div className="flashcard-container">
            <button
              className="nav-button prev"
              onClick={prevCard}
              aria-label="Previous card"
            >
              ‹
            </button>

            {/* Card that flips on click */}
            <div
              className="card-wrapper"
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
                if (e.key === "ArrowLeft") {
                  prevCard();
                }
              }}
              aria-pressed={flipped}
            >
              {/* Front of card - shows question */}
              <div className={`card-side card-front ${getCategoryClass(current.category)} ${flipped ? "hidden" : "visible"}`}>
                <div className="card-content">
                  <h2 className="card-label">Question</h2>
                  <p className="card-text">{current.question}</p>
                  <p className="card-hint">Click to reveal answer</p>
                </div>
              </div>

              {/* Back of card - shows answer */}
              <div className={`card-side card-back ${getCategoryClass(current.category)} ${flipped ? "visible" : "hidden"}`}>
                <div className="card-content">
                  <h2 className="card-label">Answer</h2>
                  <p className="card-text">{current.answer}</p>
                  <p className="card-hint">Click to see question</p>
                </div>
              </div>
            </div>

            <button
              className="nav-button next"
              onClick={nextCard}
              aria-label="Next card"
            >
              ›
            </button>
          </div>

          {/* Controls */}
          <div className="controls">
            <button onClick={nextCard} className="control-button primary">
              Next Random Card
            </button>
            <button onClick={reshuffle} className="control-button secondary">
              Shuffle & Restart
            </button>
            <div className="card-counter">
              {index + 1} / {total}
            </div>
          </div>

          <footer className="footer-tip">
            💡 Tip: Click the card or press Enter to flip • Use ← / → arrows to
            navigate
          </footer>

          {/* Category legend */}
          <div className="category-legend">
            <p className="legend-title">Card Categories:</p>
            <div className="legend-items">
              <span className="legend-item basics">🟦 Basics</span>
              <span className="legend-item intermediate">🟩 Intermediate</span>
              <span className="legend-item advanced">🟪 Advanced</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;