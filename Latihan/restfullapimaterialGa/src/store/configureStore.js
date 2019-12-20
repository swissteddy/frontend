import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers/reducer';
//tambahan code untuk redux thunk /middleware
import thunk from 'redux-thunk';

// const store = createStore (reducers);

//tambahan code untuk redux thunk /middleware
const store = createStore (reducers, applyMiddleware(thunk));

export default store;