import ApiServices from '../../dataAccess/apiServices';
import MuseumTypes from '../museumTypes';

const getObjectById = (objectId) => async (dispatch) => {
  const objectInfo = await ApiServices.getObjectById(objectId);
  const pieceDetail = objectInfo.data;
  dispatch({
    type: MuseumTypes.GET_PIECE_BY_ID,
    payload: pieceDetail,
  });
};
export default getObjectById;
