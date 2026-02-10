import { useState, useEffect, useRef } from "react";
import "./App.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [history, setHistory] = useState([]);

  const inputRef = useRef(null);

  /* ================= THEME ================= */
  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  /* ================= SHORTCUT ================= */
  useEffect(() => {
    const handler = (e) => {
      if (e.ctrlKey && e.key === "l") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  /* ================= HISTORY ================= */
  const saveHistory = () => {
    if (!query.trim()) return;
    setHistory((prev) =>
      [query, ...prev.filter((q) => q !== query)].slice(0, 5)
    );
  };

  return (
    <div className={`app ${dark ? "dark" : ""}`}>
      {/* ================= HEADER ================= */}
      <header className="nav">
        <a href="https://mail.google.com">Gmail</a>
        <a href="https://images.google.com">Images</a>
        <button className="theme-btn" onClick={() => setDark(!dark)}>
          {dark ? "☀️" : "🌙"}
        </button>
      </header>

      {/* ================= MAIN ================= */}
      <main className="hero">
        <section className="hero-content">
          {/* BRANDING */}
          <section className="branding">
            <img
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
              alt="Google"
              className="logo"
            />
            <p className="tagline">Search smarter. Faster. Cleaner.</p>
          </section>

          {/* SEARCH SECTION */}
          <section className="search-card">
            <form
              className="search-form"
              action="https://www.google.com/search"
              method="GET"
              onSubmit={saveHistory}
            >
              {/* SEARCH BOX */}
              <div className="search-box">
                <span className="icon">🔍</span>
                <input
                  ref={inputRef}
                  type="text"
                  name="q"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search Google or type a URL"
                />
                <span className="icon">🎤</span>
              </div>

              {/* HISTORY */}
              {history.length > 0 && (
                <section className="history">
                  {history.map((item, i) => (
                    <div
                      key={i}
                      className="history-item"
                      onClick={() => setQuery(item)}
                    >
                      🔍 {item}
                    </div>
                  ))}
                </section>
              )}

              {/* ACTIONS */}
              <section className="buttons">
                <button type="submit">Google Search</button>
                <button
                  type="button"
                  onClick={() =>
                    (window.location.href =
                      "https://yashwantchatti005.github.io/Portfolio/")
                  }
                >
                  My Portfolio
                </button>
              </section>

              {/* HINT */}
              <section className="hint">
                Press <kbd>Ctrl</kbd> + <kbd>L</kbd> to focus
              </section>
            </form>
          </section>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
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
