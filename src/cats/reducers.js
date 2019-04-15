import { 
    REQUEST_BREEDS_PENDING,
    REQUEST_BREEDS_SUCCESS,
    REQUEST_BREEDS_FAIL,
    CHANGE_BREED,
    SELECT_BREED_PENDING,
    SELECT_BREED_SUCCESS,
    SELECT_BREED_FAIL,
}  from './constants.js';

const initialStateBreeds = {
    isPending: false,
    breeds: {},
    error: '',
};

export const requestBreedsRed = (state=initialStateBreeds, action={}) => {
    switch (action.type) {
        case REQUEST_BREEDS_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_BREEDS_SUCCESS:
            return Object.assign({}, state, { breeds: action.payload, isPending: false});
        case REQUEST_BREEDS_FAIL:
            return Object.assign({}, state, { error: action.payload, isPending: false});
        default:
            return state;
    }
};

const initialStateBreed = {
    // selected_breed: '',
    breed_data: '',
    isPending: false,
    error: ''
};

const initialStateSelect = {
    breed: '',
}

export const changeBreed = (state=initialStateSelect, action = {}) => {
    switch (action.type) {
        case CHANGE_BREED:
            return Object.assign({}, state, {breed: action.payload});
        default:
            return state;
    }
}

export const requestBreedChange = (state=initialStateBreed, action = {}) => {
    // console.log(state);
    switch (action.type) {
        case SELECT_BREED_PENDING:
            return Object.assign({}, state, {isPending: true});
        case SELECT_BREED_SUCCESS:
            return Object.assign({}, state, {breed_data: action.payload,
                                            isPending: false});
        case SELECT_BREED_FAIL:
            return Object.assign({}, state, {error: action.payload, isPending:false});
        default:
            return state;
    };
};