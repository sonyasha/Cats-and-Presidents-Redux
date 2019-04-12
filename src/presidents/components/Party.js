import React from 'react';
import Background from './backgrounds/random_grey_variations.png';

class Party extends React.Component {
    render() {
        return (
            <div className='ma1'>
                <button className='br2 light-gray'
                    value={this.props.party}
                    onClick={this.props.onButtonChange}
                    style={{backgroundImage: `url(${Background})`}}>
                    {this.props.party}
                </button>
            </div>
        )
    }
}

export default Party;