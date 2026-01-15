import { useState } from "react";
import booksData from "../data/books";
import "./faculty.css"
function Faculty(){
    const [books, setBooks] = useState(booksData);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    function handleAddBook(e){
        e.preventDefault();
   
    if(!title || !author){
        alert("All fields are compulory");
        return;
    }
    const newBook ={
        id: Date.now(),
        title,
        author,
        available:true,
    };
    setBooks([...books, newBook]);
    setTitle('');
    setAuthor('');
    }
    return(
        <div className="faculty-dashboard">
      <h1>📕 Faculty Dashboard</h1>

      <form className="add-book-form" onSubmit={handleAddBook}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <button type="submit">➕ Add Book</button>
      </form>

      <h2>📚 Books in Library</h2>

      <div className="book-list">
        {books.length === 0 ? (
          <p>No books added yet</p>
        ) : (
          books.map((book) => (
            <div className="book-card" key={book.id}>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <span className="status">Available</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default Faculty;