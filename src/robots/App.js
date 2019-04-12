import React from 'react';
import Cardlist from './CardList';
import SearchBox from './Searchbox';
import Scroll from '../components/Scroll';
import './app.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json()
            .then(names => this.setState({robots: names}))
        );
    }

    onSearchChange = event => {
        this.setState({searchfield: event.target.value});
    }

    render() {

        const { robots, searchfield } = this.state;

        const filteredNames = robots.filter(el => 
            el.name.toLowerCase().includes(searchfield.toLowerCase()));

        return !robots.length ?
            <h1>LOADING</h1> :
            (
                <div className='tc'>
                    <h1 className='f2'>FACES</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <Cardlist robots = {filteredNames}/>
                    </Scroll>
                    
                </div>
                
                
            )    
    }
}

export default App;