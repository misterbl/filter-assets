import { createStore, combineReducers } from 'redux';
import reducers from './reducers';

const configureStore = ({ initialState = {} }) => {
    const reducer = combineReducers({
        ...reducers,
    });
    const store = createStore(
        reducer,
        initialState,
    );

    return store;
};

export default configureStore;
