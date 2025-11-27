// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchResults from "./components/SearchResults";
import Home from "./components/Home";
import Search from "./pages/SearchPage"; // we'll create this inline below (or you can create a file)
import UserPage from "./pages/UserPage"; // same — we'll add below
import UserDetails from "./components/UserDetails";


 function App() {
  return (
    <BrowserRouter>
      <div style={{ maxWidth: 900, margin: "24px auto", padding: "0 16px" }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
          <h3 style={{ margin: 0 }}><Link to="/" style={{ textDecoration: "none", color: "inherit" }}>GitHub Search</Link></h3>
          <nav>
            <Link to="/search">Search</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/user/:username" element={<UserPage />} />
            <Route path="/results" element={<SearchResults />} />
            <Route path="/user/:username" element={<UserDetails />} />

          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;