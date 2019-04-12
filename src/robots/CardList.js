import React from 'react';
import Card from './Card';

class CardList extends React.Component {
    
    render() {
        // console.log(this.props);
        return (
            <div className=''>
                {this.props.robots.map(el => 
                    (<Card key={el.id}
                    id={el.id}
                    name={el.name}
                    email={el.email}
                    />)
                )}
            </div>
        )
    }
}

export default CardList;