import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Posting from './postings/Posting';

class App extends Component {
  render() {
    return (
      <>
        <Posting />
      </>
    );
  }
}

export default App;
