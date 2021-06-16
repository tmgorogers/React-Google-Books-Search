import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import Search from './pages/Search.js';
import Saved from './pages/Saved.js';

import Header from './components/Header/Header.js';

//import Books from './components/Books/Books.js'; <Books />
const App = () => {
    return (
    <Router>
      <div>
            <NavBar />
            <Header />
            <Link>  
            <Route exact path="/" component={Search}/>
            <Route exact path="/search" component={Search}/>
            <Route exact path="/saved" component={Saved}/>
            </Link>
      </div>
    </Router>

  );
}

export default App;
