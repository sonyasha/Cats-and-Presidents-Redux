import React from 'react';

class SearchBox extends React.Component {
    render() {
        return (
            <div className='pa1'>
                <input className=' ba b--green bg-washed-blue br2'
                type='search'
                placeholder='Search Faces'
                onChange={this.props.searchChange}/>
            </div>
        )
    }
}

export default SearchBox;
