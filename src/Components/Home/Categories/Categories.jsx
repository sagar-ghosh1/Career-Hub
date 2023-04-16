import React from 'react';
import './Categories.css'

const Categories = ({item}) => {
    const {JobAvailable, title, png } = item;
    return (
        <div className='card'>
           <img src={png} alt="" />
            <h4>{title}</h4>
            <p>{JobAvailable} Jobs Available</p>
        </div>
    );
};

export default Categories;