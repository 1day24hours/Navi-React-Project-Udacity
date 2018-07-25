import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

class List extends React.Component {

    state = {
        query:''
    }

    updateQuery = (event)=>{
        this.setState({
            query:event.target.value
        });
    }

    render() {
        return(
            <ul className='list'>
                <h1>Auckland Locations</h1>
                <input type='text' placeholder='Search your place...' />
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