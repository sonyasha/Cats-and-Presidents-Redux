import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import Catsapp from './cats/containers/Catsapp';
import Presapp from './presidents/containers/PresApp';
import { searchPresidents, requestPresidents, changeParty } from './presidents/reducers';
import { requestBreedsRed, changeBreed, requestBreedChange } from './cats/reducers';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
// import registerServiceWorker from './registerServiceWorker'

const logger = createLogger();
const presReducer = combineReducers({ searchPresidents,
                                        requestPresidents,
                                        changeParty,
                                     });

const presStore = createStore(presReducer, applyMiddleware(thunkMiddleware, logger));

const catsReducer = combineReducers({ requestBreedsRed, changeBreed, requestBreedChange });

const catsStore = createStore(catsReducer, applyMiddleware(thunkMiddleware, logger));


ReactDOM.render(
            <div>
                <div className='fl w-50-l w-100-m vh-100-l'>
                    {/* <App/> */}
                    <Provider store={presStore}>
                        <Presapp/>
                    </Provider>
                </div>
                <div className='fl w-50-l w-100-m vh-100-l'>
                    <Provider  store={catsStore}>
                        <Catsapp/>
                    </Provider>
                    
                </div>
                
            </div>  
            ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// registerServiceWorker();
serviceWorker.unregister();
