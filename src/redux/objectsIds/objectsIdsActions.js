import ApiServices from '../../dataAccess/apiServices';
import MuseumTypes from '../museumTypes';

const getObjectsByDepartment = (id) => async (dispatch) => {
  const response = await ApiServices.getObjectsByDepartment(id);
  const objectDetails = [];
  const entries = Object.entries(response.data);
  const records = entries[1][1].slice(0, 16);
  const arrayPromises = [];
  records.forEach((objectId) => {
    arrayPromises.push(ApiServices.getObjectById(objectId));
  });
  const responsePromises = await Promise.all(arrayPromises);
  responsePromises.forEach((piece) => {
    objectDetails.push(piece.data);
  });
  dispatch({
    type: MuseumTypes.GET_OBJECTS_BY_DEPARTMENT,
    payload: objectDetails,
  });
};
export default getObjectsByDepartment;
