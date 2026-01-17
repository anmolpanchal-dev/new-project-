import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";  // separate CSS

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password || !role) {
      alert("All fields are required!");
      return;
    }
    if (role === "student") navigate("/student");
    else if (role === "faculty") navigate("/faculty");

    setEmail("");
    setPassword("");
    setRole("");
  };

  return (
    <div className="login-container">
      <h1>Library Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          placeholder="Enter email"
          className="inputField"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          value={password}
          placeholder="Enter password"
          className="inputField"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <select
          value={role}
          className="inputField"
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select Role</option>
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
        </select>
        <br />
        <button type="submit" className="submitBtn">Login</button>
      </form>
    </div>
  );
}

export default Login;
