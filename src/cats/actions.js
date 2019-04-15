import { 
    REQUEST_BREEDS_PENDING,
    REQUEST_BREEDS_SUCCESS,
    REQUEST_BREEDS_FAIL,
    CHANGE_BREED,
    SELECT_BREED_PENDING,
    SELECT_BREED_SUCCESS,
    SELECT_BREED_FAIL,

}  from './constants.js';

export const requestBreeds = () => (dispatch) => {
    dispatch( {type: REQUEST_BREEDS_PENDING });
    fetch(('https://api.thecatapi.com/v1/breeds'), {
            headers: {"x-api-key": process.env.REACT_APP_CATS_API_KEY}
            })
            .then(response => response.json())
            .then(data => data.reduce((tot,el) => {
                tot[el.name] = el.id;
                return tot;
            }, {}))
            .then(obj => {
                dispatch( {type: REQUEST_BREEDS_SUCCESS,
                payload: obj});
            })
            .catch(error => dispatch({type: REQUEST_BREEDS_FAIL, payload: error}))
};

export const requestBreedData = (text) => (dispatch) => {
    dispatch( {type: SELECT_BREED_PENDING});
    fetch((`https://api.thecatapi.com/v1/images/search?size=small&breed_ids=${text}`), {
        headers: {"x-api-key": process.env.REACT_APP_CATS_API_KEY}
        })
        .then(response => response.json())
        .then(data => {
            dispatch( {type: SELECT_BREED_SUCCESS, payload: data[0]});
        })
        .catch(error => dispatch({type: SELECT_BREED_FAIL, payload: error}))
};


export const selectBreed = (text, dispatch, callback) => {
    dispatch(callback(text));
    return {
        type: CHANGE_BREED,
        payload: text
    };
};


