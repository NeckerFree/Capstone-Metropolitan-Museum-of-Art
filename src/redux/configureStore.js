import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import departmentsReducer from './departments/departmentReducer';

const middleWare = applyMiddleware(thunk, logger);
const store = configureStore(
  {
    reducer: { departmentsReducer },
    middleWare,
  },
);
export default store;
