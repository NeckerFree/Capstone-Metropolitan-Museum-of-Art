import { GET_OBJECTS_BY_DEPARTMENT, GET_OBJECTS_BY_ID } from '../museumTypes';
import ApiServices from '../../dataAccess/apiServices';

const getObjectsByDepartment = (id) => async (dispatch) => {
  const response = await ApiServices.getObjectsByDepartment(id);
  const pieces = [];
  const entries = Object.entries(response.data);
  const records =entries[1][1].slice(0, 10);
  records.forEach((objectId) => {
    const piece = { ...objectId };
    pieces.push(piece);
  });
  dispatch({
    type: GET_OBJECTS_BY_DEPARTMENT,
    payload: pieces,
  });
};

const getObjectById = (objectId) => async (dispatch) => {
  const objectInfo = await ApiServices.getObjectById(objectId);
  pieces.push(objectInfo);
  dispatch({
    type: GET_OBJECTS_BY_ID,
    payload: pieces,
  });
};
export default {getObjectsByDepartment, getObjectById};
