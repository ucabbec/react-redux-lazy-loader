import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import lazyLoader from './reducers/lazyLoader';

const rootReducer = combineReducers({
	lazyLoader: lazyLoader
});

const configureStore = () => {
	return createStore(rootReducer,applyMiddleware(thunk));
}

export default configureStore;