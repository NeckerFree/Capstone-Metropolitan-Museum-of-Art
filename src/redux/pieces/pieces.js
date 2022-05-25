import { GET_OBJECTS_BY_DEPARTMENT } from '../museumTypes';

const objectsCollection = [];
export default function objectsReducer(state = objectsCollection, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_OBJECTS_BY_DEPARTMENT: {
      return payload;
    }
    case GET_OBJECTS_BY_ID:{
      return payload;
    }
    default:
      return state;
  }
}
