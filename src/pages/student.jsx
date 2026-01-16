import { useContext } from "react";
import "./student.css";
import  {BookContext}  from "../context/BookContext";

function Student() {
  const { books, setBooks } = useContext(BookContext);

  function issueBook(bookId) {
    const updatedBooks = books.map((book) =>
      book.id === bookId
        ? { ...book, available: false }
        : book
    );

    setBooks(updatedBooks); // ✅ Context handle karega localStorage
  }

  return (
    <div className="student-dashboard">
      <h1>📘 Student Dashboard</h1>

      <h2>📚 Available Books</h2>

      {books.filter((b) => b.available).length === 0 ? (
        <p>No books available</p>
      ) : (
        books
          .filter((book) => book.available)
          .map((book) => (
            <div key={book.id}>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <button onClick={() => issueBook(book.id)}>
                📖 Issue Book
              </button>
            </div>
          ))
      )}
    </div>
  );
}

export default Student;
