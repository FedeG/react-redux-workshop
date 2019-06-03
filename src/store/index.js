import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';

import rootReducer from '../reducers';

const configureStore = () => {
  // eslint-disable-next-line no-underscore-dangle
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(thunk)),
  );
  return store;
};

export default configureStore;
