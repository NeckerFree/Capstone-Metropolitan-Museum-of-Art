import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import departmentReducer from './departments/departments';
import objectsReducer from './objectsIds/objectsIds';
import piecesReducer from './pieces/pieces';

const middleWare = applyMiddleware(thunk, logger);
const store = configureStore(
  {
    reducer: { departmentReducer, objectsReducer, piecesReducer },
    middleWare,
  },
);
export default store;
