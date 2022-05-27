import MuseumTypes from '../museumTypes';

const piecesCollection = [];
export default function piecesReducer(state = piecesCollection, action) {
  const { type, payload } = action;
  switch (type) {
    case MuseumTypes.GET_PIECE_BY_ID: {
      return { ...payload };
    }
    default:
      return state;
  }
}
