import React, { useState } from 'react';
import axios from 'axios';

const url = 'http://localhost:5000'
const urlRender= 'https://nodelibback.onrender.com'
const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [publicationYear, setPublicationYear] = useState('');
  const [availableCopies, setAvailableCopies] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(urlRender +'/books', {
      title,
      author,
      genre,
      publicationYear,
      availableCopies,
    })
      .then(response => {
        alert('Book added successfully!');
        // Reset form
        setTitle('');
        setAuthor('');
        setGenre('');
        setPublicationYear('');
        setAvailableCopies('');
      })
      .catch(error => {
        console.error('Error adding book:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add a Book</h1>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Author:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      </div>
      <div>
        <label>Genre:</label>
        <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} required />
      </div>
      <div>
        <label>Publication Year:</label>
        <input type="number" value={publicationYear} onChange={(e) => setPublicationYear(e.target.value)} required />
      </div>
      <div>
        <label>Available Copies:</label>
        <input type="number" value={availableCopies} onChange={(e) => setAvailableCopies(e.target.value)} required />
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
