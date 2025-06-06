import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Home from "./pages/Home";
import About from "./pages/About";

const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <div style={{ padding: "1rem" }}>
        <nav>
          <Link to="/" style={{ marginRight: "1rem" }}>
            {t("home")}
          </Link>
          <Link to="/about">{t("about")}</Link>
        </nav>

        <div style={{ marginTop: "1rem" }}>
          <button onClick={() => changeLanguage("en")}>English</button>
          <button
            onClick={() => changeLanguage("lt")}
            style={{ marginLeft: "0.5rem" }}
          >
            Lietuvių
          </button>
        </div>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
