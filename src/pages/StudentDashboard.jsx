import { useContext, useState } from "react";
import { BooksContext } from "../context/BooksContext";
import "../styles/dashboard.css";

function StudentDashboard() {
  const { books } = useContext(BooksContext);

  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");

  const filteredBooks = books.filter(
    (b) => b.branch === branch && b.semester === semester
  );

  return (
    <div className="dashboard">
      <h2>🎓 Student Dashboard</h2>

      <select value={branch} onChange={(e) => setBranch(e.target.value)}>
        <option value="">Select Branch</option>
        <option value="CSE">CSE</option>
        <option value="IT">IT</option>
        <option value="ME">ME</option>
      </select>

      <select
        value={semester}
        onChange={(e) => setSemester(e.target.value)}
      >
        <option value="">Select Semester</option>
        <option value="1">Semester 1</option>
        <option value="2">Semester 2</option>
        <option value="3">Semester 3</option>
        <option value="4">Semester 4</option>
      </select>

      <h3>📚 Books</h3>
      <div className="books-grid">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-card">
            {book.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentDashboard;
