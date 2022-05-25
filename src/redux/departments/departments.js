import { GET_DEPARTMENTS, GET_OBJECTS_BY_DEPARTMENT } from '../museumTypes';

const departmentsCollection = [];
export default function departmentsReducer(state = departmentsCollection, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_DEPARTMENTS:
      return payload;
    case GET_OBJECTS_BY_DEPARTMENT: {
      return payload;
    }
    // case REMOVE_DEPARTMENT: {
    //   const index = state.findIndex((department) => department.id === payload);
    //   return [...state.slice(0, index), ...state.slice(index + 1)];
    // }
    default:
      return state;
  }
}
