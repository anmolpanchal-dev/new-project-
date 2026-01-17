import { createContext, useEffect, useState } from "react";

export const BooksContext = createContext();

function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("books"));
    if (stored) setBooks(stored);
  }, []);

  const addBook = (book) => {
    const updated = [...books, book];
    setBooks(updated);
    localStorage.setItem("books", JSON.stringify(updated));
  };

  return (
    <BooksContext.Provider value={{ books, addBook }}>
      {children}
    </BooksContext.Provider>
  );
}

export default BooksProvider;
