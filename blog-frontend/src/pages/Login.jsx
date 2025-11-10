import { useState } from "react";
import axios from "axios";
const backendURL = "https://heathylifeblogbackend.onrender.com";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${backendURL}/api/users/login`, {
        email,
        password,
      });
      localStorage.setItem("currentUser", JSON.stringify(res.data.user));
      alert("Admin login successful!");
      window.location.href = "/blogs";
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="form-container">
      <center>
      <h2>Admin Login</h2><br></br>
      </center>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <br></br>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}


