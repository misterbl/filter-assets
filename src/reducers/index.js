import { combineReducers } from 'redux';
import * as appReducers from './appReducers';

const reducers = {
  app: combineReducers(appReducers),
};

export default reducers;
