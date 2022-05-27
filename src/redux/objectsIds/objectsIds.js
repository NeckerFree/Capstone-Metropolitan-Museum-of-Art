import MuseumTypes from '../museumTypes';

const objectsCollection = [];
export default function objectsReducer(state = objectsCollection, action) {
  const { type, payload } = action;
  switch (type) {
    case MuseumTypes.GET_OBJECTS_BY_DEPARTMENT:
      return [...payload];
    default:
      return state;
  }
}
