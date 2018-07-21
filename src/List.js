import React from 'react';
import './style.css';

class List extends React.Component {
    render() {
        return(
            <ul className='list'>
                {this.props.places.map((place) => (
                    <li className='title'>
                        {this.title}
                    </li>
                ))}
            </ul>
        )
    }
}

export default List;