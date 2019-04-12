import React from 'react';

class PresSearch extends React.Component {
    render() {
        return (
            <div>
                <input type='search' onChange={this.props.onSearch}
                className='ba mt1 br2 bg-near-white b--black-30'/>
            </div>
        )
    }
};

export default PresSearch;