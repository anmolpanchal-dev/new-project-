import { useState, useContext } from "react";
import "./faculty.css";
import {BookContext} from "../context/BookContext";

function Faculty() {
  const { books, setBooks } = useContext(BookContext);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  function handleAddBook(e) {
    e.preventDefault();

    if (!title || !author) {
      alert("All fields are compulsory");
      return;
    }

    const newBook = {
      id: Date.now(),
      title,
      author,
      available: true,
    };

    setBooks([...books, newBook]);
    setTitle("");
    setAuthor("");
  }

  return (
    <div className="faculty-dashboard">
      <h1>📕 Faculty Dashboard</h1>

      <form onSubmit={handleAddBook}>
        <input
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <button type="submit">➕ Add Book</button>
      </form>

      <h2>📚 Library Books</h2>

      {books.length === 0 ? (
        <p>No books yet</p>
      ) : (
        books.map((book) => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <span>{book.available ? "Available" : "Issued"}</span>
          </div>
        ))
      )}
    </div>
  );
}

export default Faculty;
