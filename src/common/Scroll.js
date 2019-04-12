import React from 'react';
import Background from '../presidents/components/backgrounds/random_grey_variations.png';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', height: '71vh', backgroundImage: `url(${Background})`}}
            className='pa2 mh3 mv2 br2'>
            {props.children}
        </div>
    )
};

export default Scroll;