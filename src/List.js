import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

class List extends React.Component {

    state = {
        query:'',
        filteredList:[]
    }

    componentDidMount() {
        this.setState({filteredList: this.props.places})
    }

    updateQuery = (event)=>{
        // this.setState({
        //     query:event.target.value
        // });

        let {places} = this.props;
        let result = places.filter(place => place.title.toLowerCase().includes(
            event.target.value.toLowerCase()
        ));

        this.setState({filteredList:result})
    }

    render() {
        return(
            <ul className='list' id='search'>
                <h1>Auckland Locations</h1>
                <input type='text' placeholder='Search your place...' 
                    onChange={this.updateQuery}
                />
                <input type='button' value='Filter' />
                {this.props.places.map((place) => (
                    <li className='title' tabIndex='0'>
                        {place.title}
                    </li>
                ))}
            </ul>
        )
    }
}

export default List;