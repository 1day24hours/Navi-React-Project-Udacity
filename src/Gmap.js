import React from 'react';
import ReactDom from 'react-dom';
import './style.css';

class Gmap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // infowindow:'',
            premarker:''
        }
    }

    componentDidMount() {
        this.loadMap();
    }

    loadMap() {
        if (this.props && this.props.google) {
            // google is available
            const { google,places } = this.props;
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

            // infowindow
            this.infoWindow = new maps.InfoWindow();
            //markers
            places.map(place => {
                let marker = new maps.Marker({
                    map: this.map,
                    position: place.location
                })
                marker.title = place.title;
                marker.addListener('click', evt => {
                    this.infoWindow.setContent(place.title);
                    this.infoWindow.open(this.map,marker);
                })
            })
        }
    }

/**
   * Open the infowindow for the marker
   * @param {object} location marker
   */
  openInforWindow(marker){
   this.closeInfoWindow();
   this.state.infowindow.open(this.state.map, marker);
   marker.setAnimation(window.google.maps.Animation.BOUNCE);//bouce effect
   this.setState({
        premarker: this.marker
    });
    this.state.infowindow.setContent('Loading data...');
  }
    /**
   * Retrive the location data from the foursquare api
   */
  getMakerInfo(marker) {

    // Add the api keys for foursquare
    const clientId = 'HNWME22DACZBRE3XCHEPDICRSCBQWCN4LSK3FRPO0VHEFFED';
    const clientSecret = '0DUHNOBRKVA0AW0PHJK4AE40L02UIWEGOOIVWJW3FS1VCAPR';
   
    // Build the api endpoint
    const url = 
        'https://api.foursquare.com/v2/venues/search?client_id=' +
        clientId +
        '&client_secret' +
        clientSecret +
        '&v=20130815&ll=' +
        marker.getPosition().lat() +
        ',' + 
        marker.getPosition().lng() +
        'limit=1';
    fetch(url)
        .then(response => {
            if(response.status !==200) {
                this.state.infoWindow.setContent('Sorry data can\'t be loaded');
                return;
            }
            response.this.state.place.then(data =>{
                console.log(data);

                const location_data = data.venues[0];
                const place = `<h3>${location_data.name}</h3>`;
                const street = `<p>${location_data.formattedAddress[0]}</p>`;
                let contact = '';
                if (location_data.contact.phone) {
                    contact= `<p>${location_data.contact.phone}</p>`;
                }
                const checkInCount = 
                    '<b>Number of CheckIn: </b>' +
                    location_data.stats.checkinsCount +
                    '<br>';
                const readMore = 
                    '<a href="https://foursquare.com/v/' +
                    location_data.id +
                    '" target="_blank">Read More on <b>Foursquare Website</b></a>';
                    this.state.infoWindow.setContent(
                        place + street + checkInCount +readMore
                    );
            });
        }) .catch(err=> {
            this.state.infoWindow.setContent('Sorry data can\'t be loaded.');
        });
  }

// Close the info window previously opened
  closeInfoWindow(){
    if(this.state.premarker) {
        this.state.infowindow.setAnimation(null);//setAnimation(animation:Animation)
    }
    this.setState({
        premarker: ''
    });
    this.state.infowindow.close();
  }
    render() {
        return(
            <div ref='googlemap' style={{width:'100%',height:'100%'}}>
                Loading Map...
            </div>
        )
    }
}

export default Gmap;