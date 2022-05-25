import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import departmentReducer from './departments/departmentReducer';
import pieceReducer from './pieces/pieceReducer';

const middleWare = applyMiddleware(thunk, logger);
const store = configureStore(
  {
    reducer: { departmentReducer, pieceReducer },
    middleWare,
  },
);
export default store;
