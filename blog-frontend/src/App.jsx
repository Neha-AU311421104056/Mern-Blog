import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signin from "./pages/Signin";
import Login from "./pages/Login";

export default function App() {
  return (
    <div>

      {/* ✅ NAVBAR */}
      <nav
        style={{
          display: "flex",
          gap: "20px",
          padding: "15px",
          background: "#f2f2f2",
          fontSize: "18px",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/login">Login</Link>
      </nav>

      {/* ✅ ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </div>
  );
}

