import React from 'react';
import { connect } from 'react-redux';

import Preslist from '../components/PresList';
import PartiesList from '../components/PartiesList';
import PresSearch from '../components/PresSearch';
import Scroll from '../../common/Scroll';

import { setSearchField, requestPresidents, setPartyButton } from '../actions';

const mapStateToProps = state => {
    return {
        search: state.searchPresidents.search,
        presidents: state.requestPresidents.presidents,
        parties: state.requestPresidents.parties,
        isPending: state.requestPresidents.isPending,
        error: state.requestPresidents.error,
        current_party: state.changeParty.current_party,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSearch: (event) => dispatch(setSearchField(event.target.value)),
        onRequestPresidents: () => dispatch(requestPresidents()),
        onButtonCnange: (event) => dispatch(setPartyButton(event.target.value)),
    }
};

class Presapp extends React.Component {

    componentDidMount() {    
        this.props.onRequestPresidents();
    };

    render() {
        const { search, onSearch, presidents, parties, isPending, current_party, onButtonCnange } = this.props;
        const searched_value = presidents.filter(el => 
            el.firstname.toLowerCase().includes(search.toLowerCase()))
            .filter(el => {
                return current_party.length === 1?
                    el.terms[0].party === current_party[0]: {};
            });
        
        return isPending ? 
                <h1>Loading</h1>:
        (
            <div className= 'tc'>
                <h1 className='f2 mid-gray'>Presidents</h1>
                <PartiesList
                    parties = {parties} onButtonChange = {onButtonCnange}/>
                {/* <PresSearch onSearch={this.onSearch}/> */}
                <PresSearch onSearch={onSearch}/>
                <Scroll>
                    <Preslist presidents = {searched_value}/>
                </Scroll>                   
            </div>
        )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Presapp);