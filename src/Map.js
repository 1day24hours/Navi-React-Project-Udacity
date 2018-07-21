import React from 'react';
import ReactDom from 'react-dom';
import './style.css';

class Map extends React.Component {

    Map.propTypes = {
        google: React.PropTypes.object,
        zoom: React.PropTypes.number,
        initialCenter: React.PropTypes.object
    }
    Map.defaultProps = {
        zoom: 13,
        // Auckland, by default
        initialCenter: {
            lat: -36.84846,
            lng: 174.763332
        }
    }

    componentDidMount() {
        this.loadMap();
    }

    loadMap() {
        if (this.props && this.props.google) {
            // google is available
            const { google } = this.props;
            const maps = google.maps;

            //grab a reference to the DOM component where we want the map to be placed
            const mapRef = this.refs.googlemap;
            //The node variable above is a reference to the actual DOM element on the page
            const node = ReactDom.findDOMNode(mapRef);

            let zoom = 14;
            let lat = -36.795293;
            let lng = 174.735701;
            const center = new maps.LatLng(lat,lng);
            const mapConfig = Object.assign({}, {
                center: center,
                zoom: zoom
            })
            this.map = new maps.Map(node, mapConfig);
        }

    }
    render() {
        return(
            <div ref='googlemap'>
                Loading Map...
            </div>
        )
    }
}

export default Map;