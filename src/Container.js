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

// map bounds
// const points = [
//     { lat: -36.660571, lng: 175.287137 },
//     { lat: - 37.065475, lng: 174.443802 }
// ]
// const bounds = new this.props.google.maps.LatLngBounds();
// for (let i = 0; i < points.length; i++) {
//     bounds.extend(points[i]);
// }


export class Container extends React.Component {
    
    render() {
        if(!this.props.loaded) {
            return <div>Loding...</div>
        }
        return(
            <div className='map'>
                <Gmap google={this.props.google} />
            </div>
            // <Map 
            //     style={{style}}
            //     google={this.props.google} zoom={14}
            //     initialCenter={{
            //         lat: -36.84846,
            //         lng: 174.763332
            //     }} 
            //     onClick={this.onMapClicked}
            //     // bounds={bounds}
            //     >
            //   <Marker />
            // </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey:'AIzaSyCfdB53Ke2w9uJRVoxmj0HNrzVa0WNW84o'
})(Container);//Container作为GoogleApiWrapper的子组件传入