import { useContext, useState } from "react";
import { BooksContext } from "../context/BooksContext";
import "../styles/dashboard.css";

function FacultyDashboard() {
  const { books, addBook } = useContext(BooksContext);

  const [bookName, setBookName] = useState("");
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");

  const handleAddBook = () => {
    if (!bookName || !branch || !semester) {
      alert("All fields are required");
      return;
    }

    addBook({
      id: Date.now(),
      name: bookName,
      branch,
      semester,
    });

    setBookName("");
    setBranch("");
    setSemester("");
  };

  return (
    <div className="dashboard">
      <h2>📘 Faculty Dashboard</h2>

      <input
        type="text"
        placeholder="Enter Book Name"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
      />

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

      <button onClick={handleAddBook}>Add Book</button>

      <h3>📚 Available Books</h3>
      <div className="books-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <strong>{book.name}</strong>
            <p>{book.branch} | Semester {book.semester}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FacultyDashboard;
