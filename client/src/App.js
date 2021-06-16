import React from 'react';
//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import Header from './components/Header/Header.js';
import Books from './components/Books/Books.js';
const App = () => {
    return (
    <div className="App">
            <Header />
            <NavBar />
            <Books />
    </div>
  );
}

export default App;
