import React from 'react';
import { connect } from 'react-redux';

import Profile from '../components/CatsProfile';
import SelectBreed from '../components/SelectBreed';
import '../../common/app.css';

import { requestBreeds, selectBreed, requestBreedData } from '../actions';

console.log(requestBreedData);

const mapStateToProps = state => {
    return {
        breeds: state.requestBreedsRed.breeds,
        isPending: state.requestBreedsRed.isPending,
        error: state.requestBreedsRed.error,
        error2: state.requestBreedChange.error,
        isPending2: state.requestBreedChange.isPending,
        selectedbreed: state.changeBreed.breed,
        breed_data: state.requestBreedChange.breed_data,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestBreeds: () => dispatch(requestBreeds()),
        onSelectChange: (event) => dispatch(selectBreed(event.target.value, dispatch, requestBreedData)),
    }
};


class Catsapp extends React.Component {
    
    constructor() {
        super();
        this.state = {
            // breeds: {},
            // selectedbreed: '',
            // breed_data: '',
        }
    };

    //check the status of response
    checkStatus = (response) => {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(new Error(response.statusText))
        }
    };
   
    componentDidMount() {
        this.props.onRequestBreeds();

        // fetch(('https://api.thecatapi.com/v1/breeds'), {
        //     headers: {"x-api-key": process.env.REACT_APP_CATS_API_KEY}
        //     })
        //     .then(this.checkStatus)
        //     .then(response => response.json())
        //     // .then(data => data.map(el =>
        //     //     this.setState({breeds: Object.assign( {},
        //     //         this.state.breeds, { [el.name] : el.id })})
        //     // ));
        //     .then(data => data.reduce((tot,el) => {
        //         tot[el.name] = el.id;
        //         return tot;
        //     }, {}))
        //     .then(obj => this.setState({breeds: obj}));
    };
    
    // onSelectChange = event => {
    //     this.setState({selectedbreed: this.props.breeds[event.target.value]});
    //     fetch((`https://api.thecatapi.com/v1/images/search?size=small&breed_ids=${this.props.breeds[event.target.value]}`), {
    //         headers: {"x-api-key": process.env.REACT_APP_CATS_API_KEY}
    //         })
    //         .then(this.checkStatus)
    //         .then(response => response.json())
    //         .then(data => this.setState({breed_data: data[0]}))
    // }

    render() {
        const { breeds, selectedbreed, breed_data, onSelectChange } = this.props;
        // console.log(selectedbreed);

        return !Object.keys(breeds).length ?
            <h1>LOADING</h1> :
            (
                <div className= 'tc flex flex-column center'>
                    <h1 className='f2 mid-gray'>
                        Cats breeds
                    </h1>
                    <SelectBreed breeds = {breeds} onChange = {onSelectChange}/>
                    <Profile breed = {selectedbreed} breed_data = {breed_data}/>
                </div>
            )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Catsapp);