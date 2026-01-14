import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (!email || !password || !role) {
      alert("All fields are compulsory");
      return;
    }

    console.log({ email, password, role });
  }

  return (
    <>
      <h1>Login Page</h1>

      <form onSubmit={handleLogin} className="form">
        <input
          type="email"
          value={email}
          className="usermail"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />

        <input
          type="password"
          value={password}
          className="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />

        <select value={role} className="userRole" onChange={(e) => setRole(e.target.value)}>
          <option value="">Select Role</option>
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
        </select>

        <br />

        <button type="submit" className="submitBtn">Login</button>
      </form>
    </>
  );
}

export default Login;
