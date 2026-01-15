import booksData from "../data/books";
import "./student.css";

function Student() {
  const availableBooks = booksData.filter((book) => book.available);

  return (
    <div className="student-dashboard">
      <h1>📘 Student Dashboard</h1>

      <h2>📚 Available Books</h2>
      <div className="book-list">
        {availableBooks.length === 0 ? (
          <p>No books available</p>
        ) : (
          availableBooks.map((book) => (
            <div className="book-card" key={book.id}>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
          ))
        )}
      </div>

      <h2>📖 My Issued Books</h2>
      <p>No books issued yet</p>
    </div>
  );
}

export default Student;
