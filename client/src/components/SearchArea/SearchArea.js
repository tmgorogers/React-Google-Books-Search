import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl'

const SearchArea = (props) => {
    return (
<div>
  <InputGroup className="search-area mb-3">
    <InputGroup.Prepend onChange={props.handleSearch}>
      <Button variant="outline-secondary">Search</Button>
    </InputGroup.Prepend>
    <FormControl onSubmit={props.searchBook} aria-describedby="basic-addon1" />
  </InputGroup>

   
  </div>
  );
}

export default SearchArea;