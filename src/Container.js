// 1st,Before we jump into building our Map component, 
// let's build our container component to demonstrate usage as well as be responsible for loading the Google Api
import React from 'react';
import './style.css';
import Gmap from './Gmap';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

//map style
const style = {
    width: '100%',
    height: '100%',
    left: '250px'
}

export class Container extends React.Component {
    
    render() {
        if(!this.props.loaded) {
            return <div>Loding...</div>
        }
        return(
            <div id='container'>
                <Gmap google={this.props.google} />
            </div>  
        )
    }
}

export default GoogleApiWrapper({
    apiKey:'AIzaSyCfdB53Ke2w9uJRVoxmj0HNrzVa0WNW84o'
})(Container);//Container作为GoogleApiWrapper的子组件传入