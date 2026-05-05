"use client";

import { useState } from "react";

export default function BooksPage() {
  const [books, setBooks] = useState([]);

  const addBook = () => {
    const newBook = {
      id: Date.now(),
      title: "New Book",
    };
    setBooks([...books, newBook]);
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Books</h1>

      <button
        onClick={addBook}
        className="mb-4 px-4 py-2 bg-red-600 text-white rounded"
      >
        Add Book
      </button>

      <div className="space-y-2">
        {books.map((book) => (
          <div key={book.id} className="p-4 bg-white shadow rounded flex justify-between">
            <span>{book.title}</span>
            <button className="text-red-500">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}