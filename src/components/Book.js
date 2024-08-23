import React from 'react';
import './Book.css';

const Book = ({ book, onDelete }) => {
  const handleDeleteClick = () => {
    onDelete(book._id); // Call the onDelete function with the book ID
  };

  return (
    <div className="book-card">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Publication Year:</strong> {book.publicationYear}</p>
      <p><strong>Available Copies:</strong> {book.availableCopies}</p>
      <button className="delete-button" onClick={handleDeleteClick}>
        Delete
      </button>
    </div>
  );
};

export default Book;
