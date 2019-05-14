import React, { Component } from 'react';
import './App.css';
import MainPage from './Pages/MainPage';

class App extends Component
{
  componentDidMount ()
  {
    document.body.style = 'background: rgb(250,250,250);';
  }

  render ()
  {
    return (
      <div className="App">
        <MainPage />
      </div>
    );
  }
}

export default App;
