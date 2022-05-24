import { ADD_DEPARTMENT, GET_DEPARTMENTS, REMOVE_DEPARTMENT } from './departmentTypes';

const departmentsCollection = [];
export default function departmentsReducer(state = departmentsCollection, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_DEPARTMENTS:
      return payload;
    case ADD_DEPARTMENT: {
      return [...state, payload];
    }
    case REMOVE_DEPARTMENT: {
      const index = state.findIndex((department) => department.id === payload);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    default:
      return state;
  }
}
