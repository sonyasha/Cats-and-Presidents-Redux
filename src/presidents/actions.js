import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_PRESIDENTS_PENDING,
    REQUEST_PRESIDENTS_SUCCESS,
    REQUEST_PRESIDENTS_FAIL,
    CHANGE_PARTY,
 } from './constants.js';

import photos from './containers/photos2.json';

export const setSearchField = text => {
    // console.log(text);
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text,
    }
};

export const requestPresidents = () => (dispatch) => {
    dispatch( {type: REQUEST_PRESIDENTS_PENDING });
    fetch('https://theunitedstates.io/congress-legislators/executive.json')
        .then(response => response.json())
        .then(data => data.reduce((tot, el) => {
                const pres_el = el.terms.filter(term => term.type === 'prez');
        
                if (pres_el.length) {
                    const terms = pres_el.map(term_type => {
                        if (term_type.party === 'Democratic' || term_type.party === 'Democrat') {
                            var party = 'Democrat'
                        }
                        else if (term_type.party === 'no party') {
                            party = 'No Party'
                        }
                        else {
                            party = term_type.party
                        };

                        return {start: term_type.start,
                                end: term_type.end,
                                party: party}
                        });
                    
                    tot.push({
                        firstname: el.name.middle ?
                            el.name.first +' '+ el.name.middle +' '+ el.name.last:
                            el.name.first +' '+ el.name.last,
                        terms: terms,
                        photo: el.name.middle ?
                            photos[el.name.first +' '+ el.name.middle +' '+ el.name.last][0]:
                            photos[el.name.first +' '+ el.name.last][0],
                        link: el.name.middle ?
                        photos[el.name.first +' '+ el.name.middle +' '+ el.name.last][1]:
                        photos[el.name.first +' '+ el.name.last][1],
                        key: el.id.govtrack,
                    });
                }
                return tot;
            },[]))
        .then(obj => {
            const parties = obj.reduce((tot, el) => tot.add(el.terms[0].party), new Set());
            dispatch( {
                type: REQUEST_PRESIDENTS_SUCCESS,
                payload: obj,
                payload_parties: ['All'].concat(Array.from(parties))
            });
        })
        .catch(error => dispatch({type: REQUEST_PRESIDENTS_FAIL, payload: error}));
};

export const setPartyButton = (text) => {
    return {
        type: CHANGE_PARTY,
        payload: text,
    }
};

