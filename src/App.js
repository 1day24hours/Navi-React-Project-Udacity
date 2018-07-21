import React, { Component } from 'react';
import './style.css';
import List from './List';
import { Container } from './Container';
// ref :https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/#

class App extends Component {

  state = {
    place:[
      { title: 'Home', location: { lat: -36.798376, lng: 174.73672 } },
      { title: 'Northcote Baptist Church', location: { lat: -36.795293, lng: 174.735701 } },
      { title: 'Auckland Zoo', location: { lat: -36.864113, lng: 174.719685 } },
      { title: 'OP Shop', location: { lat: -36.799787, lng: 174.747666 } },
      { title: 'Auckland City Backpackers', location: { lat: -36.856863, lng: 174.762632} }
    ]
  }
  render() {
    return (
      <div>
        <div id='search'>
          <h1>Auckland Locations</h1>
          <input type='text' placeholder='Search your place...' />
          <input type='button' value='Filter' />
          {/* show the map */}
          <Container />
          {/* show the list */}
          <List 
            place={this.state.place}
          />
        </div>
      </div>
    )
  }
}
export default App;
