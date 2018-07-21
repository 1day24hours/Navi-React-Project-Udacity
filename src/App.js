import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';
// ref :https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/#

class App extends Component {

  state = {
    place:[
      { title: 'Home', location: { lat: -36.798376, lng: 174.73672 } },
      { title: 'Northcote Baptist Church', location: { lat: 36.795293, lng: 174.735701 } },
      { title: 'Auckland Zoo', location: { lat: 36.864113, lng: 174.719685 } },
      { title: 'OP Shop', location: { lat: 36.799787, lng: 174.747666 } },
      { title: 'Auckland City Backpackers', location: { lat: 36.856863, lng: 174.762632} }
    ]
  }
  render() {
    return (
      <div>

      </div>
  }
}
export default App;
