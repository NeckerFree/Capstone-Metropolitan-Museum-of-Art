import apiConnection from './apiConnection';

const getAllDepartments = () => apiConnection.get('/departments');
const getObjectsByDepartment = (id) => apiConnection.get(`objects?departmentIds=${id}`);
const getObjectById = (objectID) => apiConnection.get(`objects/${objectID}`);
const getObjectsByDepIdSearch = (id, searchText) => apiConnection.get(`search?isPublicDomain=true&hasImages=true&departmentId=${id}&q=${searchText}`);
const ApiServices = {
  getAllDepartments,
  getObjectsByDepartment,
  getObjectById,
  getObjectsByDepIdSearch,
};
export default ApiServices;
