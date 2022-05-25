import { v4 as uniqueID } from 'uuid';
import { ADD_DEPARTMENT, GET_DEPARTMENTS, GET_OBJECTS_BY_DEPARTMENT } from '../museumTypes';
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
    type: ADD_DEPARTMENT,
    payload: department,
  });
};

export const getAllDepartments = () => async (dispatch) => {
  const response = await ApiServices.getAllDepartments();
  const departments = [];
  const entries = Object.entries(response.data);
  entries[0][1].forEach((inputEntry) => {
    const imageUrl = getImage(inputEntry.departmentId);
    const department = { ...inputEntry, imageUrl };
    departments.push(department);
  });
  dispatch({
    type: GET_DEPARTMENTS,
    payload: departments,
  });
};

export const getObjectsByDepartment = (id) => async (dispatch) => {
  await ApiServices.getObjectsByDepartment(id);
  dispatch({
    type: GET_OBJECTS_BY_DEPARTMENT,
    payload: id,
  });
};
