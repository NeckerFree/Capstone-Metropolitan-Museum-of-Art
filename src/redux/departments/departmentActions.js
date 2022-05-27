import { v4 as uniqueID } from 'uuid';
import MuseumTypes from '../museumTypes';
import ApiServices from '../../dataAccess/apiServices';
import getImage from '../../dataAccess/departmentImages';

export const createDepartment = (departmentName, description) => async (dispatch) => {
  const departmentId = uniqueID();
  const departmentCreate = {
    department_id: departmentId,
    departmentName,
    description,
  };
  const department = {
    id: departmentId,
    name: departmentName,
    description,
  };
  await ApiServices.createDepartment(departmentCreate);
  dispatch({
    type: MuseumTypes.ADD_DEPARTMENT,
    payload: department,
  });
};

export const getAllDepartments = () => async (dispatch) => {
  const response = await ApiServices.getAllDepartments();
  const departments = [];
  const entries = Object.entries(response.data);
  entries[0][1].forEach((inputEntry) => {
    const [imageUrl, count] = getImage(inputEntry.departmentId);
    const department = { ...inputEntry, imageUrl, count };
    departments.push(department);
  });
  dispatch({
    type: MuseumTypes.GET_DEPARTMENTS,
    payload: departments,
  });
};

export const getObjectsByDepartment = (id) => async (dispatch) => {
  await ApiServices.getObjectsByDepartment(id);
  dispatch({
    type: MuseumTypes.GET_OBJECTS_BY_DEPARTMENT,
    payload: id,
  });
};
