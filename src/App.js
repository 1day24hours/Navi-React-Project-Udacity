import React, { Component } from 'react';
import './style.css';
import List from './List';
import GoogleApiComponent from './Container'
// ref :https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/#

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      place:[
      { title: 'Home', location: { lat: -36.798376, lng: 174.73672 } },
      { title: 'Northcote Baptist Church', location: { lat: -36.795293, lng: 174.735701 } },
      { title: 'Auckland Zoo', location: { lat: -36.864113, lng: 174.719685 } },
      { title: 'OP Shop', location: { lat: -36.799787, lng: 174.747666 } },
      { title: 'Auckland City Backpackers', location: { lat: -36.856863, lng: 174.762632} }
    ],
    clickedItem:null
    }
  }
  
  onClickItem = (item) => {
    this.setState({clickedItem:item})
  }
  
  render() {
    return (

        <div id='container'>
          {/* show the map */}
          <GoogleApiComponent 
            places={this.state.place} 
            clickedItem={this.state.clickedItem}
          />
          {/* show the list */}
          <List 
            places={this.state.place}
            onClickItem ={this.onClickItem}
          />
        </div>
    )
  }
}
export default App;
