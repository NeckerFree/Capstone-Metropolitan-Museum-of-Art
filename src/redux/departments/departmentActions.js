import { v4 as uniqueID } from 'uuid';
import { ADD_DEPARTMENT, GET_DEPARTMENTS, REMOVE_DEPARTMENT } from './departmentTypes';
import ApiServices from '../../dataAccess/apiServices';

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
  entries.forEach((inputEntry) => {
    const department = Object.assign({ id: inputEntry[0] }, ...inputEntry[1]);
    departments.push(department);
  });
  dispatch({
    type: GET_DEPARTMENTS,
    payload: departments,
  });
};

export const removeDepartment = (id) => async (dispatch) => {
  await ApiServices.removeDepartment(id);
  dispatch({
    type: REMOVE_DEPARTMENT,
    payload: id,
  });
};
