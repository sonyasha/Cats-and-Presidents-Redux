import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_PRESIDENTS_PENDING,
    REQUEST_PRESIDENTS_SUCCESS,
    REQUEST_PRESIDENTS_FAIL,
    CHANGE_PARTY
 } from './constants.js';

const initialStateSearch = {
    search: '',
}

export const searchPresidents = (state=initialStateSearch, action={}) => {
    // console.log(action);
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { search: action.payload });
            // return { ...state, search: action.payload }
        default:
            return state;
    }
};

const initialStatePresidents = {
    isPending: false,
    presidents: [],
    parties: [],
    error: '',
}

let terrible_parties = [];

export const requestPresidents = (state=initialStatePresidents, action={}) => {
    switch (action.type) {
        case REQUEST_PRESIDENTS_PENDING:
            return Object.assign({}, state, { isPending: true});
        case REQUEST_PRESIDENTS_SUCCESS:
            terrible_parties = action.payload_parties;
            return Object.assign({}, state, { 
                presidents: action.payload, parties: action.payload_parties, isPending: false });
        case REQUEST_PRESIDENTS_FAIL:
            return Object.assign({}, state, { error: action.payload, isPending: false});
        default:
            return state;
    }
};

const initialStateButton = {
    current_party: '',
};

export const changeParty = (state=initialStateButton, action={}) => {
    switch (action.type) {
        case CHANGE_PARTY:
            return action.payload !== 'All' ?
                Object.assign({}, state, { current_party: [action.payload] }):
                Object.assign({}, state, { current_party: terrible_parties});
        default:
            return state;
    }
};

