import MuseumTypes from '../museumTypes';

const departmentsCollection = [];
export default function departmentsReducer(state = departmentsCollection, action) {
  const { type, payload } = action;
  switch (type) {
    case MuseumTypes.GET_DEPARTMENTS:
      return payload;
    case MuseumTypes.GET_OBJECTS_BY_DEPARTMENT: {
      return payload;
    }
    default:
      return state;
  }
}
