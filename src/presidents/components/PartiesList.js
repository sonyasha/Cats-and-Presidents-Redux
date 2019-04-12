import React from 'react';
import Party from './Party';

class PartiesList extends React.Component {
    render() {
        return (
            <div className='flex flex-wrap justify-center'>
                {this.props.parties.map(el =>
                (<Party party = {el}
                        key = {el}
                        onButtonChange = {this.props.onButtonChange}/>)
                )}
            </div>
        )   
    }
};

export default PartiesList;