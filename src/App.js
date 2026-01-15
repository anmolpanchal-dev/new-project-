import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./pages/login.css"
import Login from "./pages/login.jsx";
import Student from "./pages/student.jsx";
import Faculty from "./pages/faculty.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/student" element={<Student/>} />
      <Route path="/faculty" element={<Faculty/>} />
    </Routes>
  );
}

export default App;
