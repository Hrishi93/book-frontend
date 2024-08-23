import React from 'react';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import './App.css';

const App = () => {
  return (
    <div>
      <AddBook />
      <BookList />
    </div>
  );
};

export default App;
