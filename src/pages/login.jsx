import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    if (!email || !password || !role) {
      alert("All fields are compulsory");
      return;
    }
    if (role === "student") {
    navigate("/student");
  }

  if (role === "faculty") {
    navigate("/faculty");
  }
    console.log({ email, password, role });
    setEmail("");
    setPassword("");
    setRole("");
  }

  return (
    <div className="login-container" >
      <h1>Login Page</h1>

      <form onSubmit={handleLogin} className="form">
        <input
          type="email"
          value={email}
          className="inputField"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />

        <input
          type="password"
          value={password}
          className="inputField"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />

        <select value={role} className="inputField" onChange={(e) => setRole(e.target.value)}>
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
