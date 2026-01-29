import { useState, useEffect, useRef } from "react";
import "./App.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [history, setHistory] = useState([]);

  const inputRef = useRef(null);

  /* Save theme */
  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  /* Ctrl + L focus */
  useEffect(() => {
    const handler = (e) => {
      if (e.ctrlKey && e.key === "l") {
        e.preventDefault();
        inputRef.current.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setHistory((prev) =>
      [query, ...prev.filter((q) => q !== query)].slice(0, 5)
    );

    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(query)}`,
      "_blank"
    );
  };

  const removeHistoryItem = (item) => {
    setHistory((prev) => prev.filter((q) => q !== item));
  };

  return (
    <div className={`app ${dark ? "dark" : ""}`}>
      {/* NAVBAR */}
      <nav className="nav">
        <a href="https://mail.google.com" target="_blank" rel="noreferrer">
          Gmail
        </a>
        <a href="https://images.google.com" target="_blank" rel="noreferrer">
          Images
        </a>

        <button className="theme-btn" onClick={() => setDark(!dark)}>
          {dark ? "☀️" : "🌙"}
        </button>
      </nav>

      {/* MAIN */}
      <main className="main">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="Google"
          className="logo"
        />

        <form onSubmit={handleSearch} className="search-form">
          <div className="search-box">
            <span className="icon">🔍</span>

            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Google or type a URL"
            />

            {query && (
              <button
                type="button"
                className="clear-btn"
                onClick={() => {
                  setQuery("");
                  inputRef.current.focus();
                }}
              >
                ✕
              </button>
            )}
          </div>

          {history.length > 0 && (
            <div className="history">
              {history.map((item, i) => (
                <div key={i} className="history-item">
                  <span
                    className="history-text"
                    onClick={() => setQuery(item)}
                  >
                    🔍 {item}
                  </span>
                  <button
                    type="button"
                    className="history-remove"
                    onClick={() => removeHistoryItem(item)}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="buttons">
            <button type="submit">Google Search</button>
            <button
              type="button"
              onClick={() =>
                window.open(
                  "https://yashwantchatti005.github.io/Portfolio/",
                  "_blank"
                )
              }
            >
              My Portfolio
            </button>
          </div>
        </form>
      </main>

      {/* FOOTER */}
<footer className="footer">
  <p>India</p>
  <div>
    <a href="/">About</a>
    <a href="/">Advertising</a>
    <a href="/">Business</a>
    <a href="/">Privacy</a>
  </div>
</footer>

    </div>
  );
}
