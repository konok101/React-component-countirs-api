import React from 'react';
import './Country.css  '

const Country = (props) => {
    return (
        <div className="country">
            <h5>{props.name}</h5>
            <h5>{props.population}</h5>
        </div>
    );
};

export default Country;