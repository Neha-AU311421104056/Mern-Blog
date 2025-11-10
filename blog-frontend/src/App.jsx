import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";
import Login from "./pages/Login";
import About from "./pages/About"; 
import Contact from "./pages/Contact";

export default function App() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );

  // optional: keep in sync with localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);  // ✅ update state
    navigate("/");          // ✅ redirect to Home
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/about">About</Link> 
        <Link to="/contact">Contact</Link>

        {!currentUser && <Link to="/login">Admin Login</Link>}
        {currentUser?.role === "admin" && (
          <>
            <span className="user-badge">Hi {currentUser.username}</span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs currentUser={currentUser} />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/edit/:id" element={<EditBlog />} />
        <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
      </Routes>
    </>
  );
}


// import { Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import CreateBlog from "./pages/CreateBlog";
// import EditBlog from "./pages/EditBlog";
// import Login from "./pages/Login";
// import About from "./pages/About"; 
// import Contact from "./pages/Contact";

// import "./index.css";

// export default function App() {
//   const currentUser = JSON.parse(localStorage.getItem("currentUser"));

//   const handleLogout = () => {
//     localStorage.removeItem("currentUser");
//     window.location.reload();
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <Link to="/">Home</Link>
//         <Link to="/blogs">Blogs</Link>
//          <Link to="/about">About</Link> 
//         <Link to="/contact">Contact</Link>

//         {!currentUser && <Link to="/login">Admin Login</Link>}
//         {currentUser && currentUser.role === "admin" && (
//   <>
//     <span className="user-badge">
//       Hi {currentUser.username || currentUser.email || "Admin"}
//     </span>
//     <button className="logout-btn" onClick={handleLogout}>Logout</button>
//   </>
// )}

        
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/blogs" element={<Blogs />} />
//         <Route path="/create" element={<CreateBlog />} />
//         <Route path="/about" element={<About />} /> 
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/edit/:id" element={<EditBlog />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </>
//   );
// }

