import React, { Component } from 'react';
import './App.css';
import Posts from './components/Posts';
import ContentTitle from './components/ContentTitle';
import NavBar from './components/NavBar';
class App extends Component {
  render() {
    return (
      <div id="App">
        <NavBar/>
        <ContentTitle/>
        <Posts/>
      </div>
    );
  }
}

export default App;
