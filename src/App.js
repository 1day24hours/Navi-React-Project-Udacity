import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';
// ref :https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/#

class App extends Component {

  state = {
    place:[
      { title: '', location: { lat: , lng: } },
      { title: '', location: { lat: , lng: } }
      { title: '', location: { lat: , lng: } }
      { title: '', location: { lat: , lng: } }
      { title: '', location: { lat: , lng: } }
    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
export default App;
