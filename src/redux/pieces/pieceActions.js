import { GET_OBJECTS_BY_DEPARTMENT } from '../museumTypes';
import ApiServices from '../../dataAccess/apiServices';

const getObjectsByDepartment = (id) => async (dispatch) => {
  const response = await ApiServices.getObjectsByDepartment(id);
  const pieces = [];
  const entries = Object.entries(response.data);
  entries[0][1].forEach((inputEntry) => {
    const piece = { ...inputEntry };
    pieces.push(piece);
  });
  dispatch({
    type: GET_OBJECTS_BY_DEPARTMENT,
    payload: pieces,
  });
};

export default getObjectsByDepartment;
