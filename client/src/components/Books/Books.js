import React from 'react';
import SearchArea from './components/SearchArea/SearchArea.js';
import request from 'superagent';
import BookList from'./components/BookList/BookList.js';

const Books = () => {

  constructor(props){
    super(props);
    this.state = {
      books: [],
      searchField: ''
    }
  }

  searchBook = (e) => {
    e.preventDefault();
    request
      .get( 'https://www.googleapis.com/books/v1/volumes')
      query({q: this.searchField})
      .then((data) => {
        this.setState({ books: [...data.body.items]});
      }
        )
  }

  handleSearch =(e) => {
    this.setState({ searchFields: e.target.value})
  }

    return (
    <div>
    <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} />
    <BookList books={this.state.books} />
    </div>
  );
}

export default Books;
