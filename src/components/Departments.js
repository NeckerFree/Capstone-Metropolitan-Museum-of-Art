import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import '../index.css';
import Department from './Department';
import { getAllDepartments } from '../redux/departments/departmentActions';

const Departments = () => {
  const departmentsCollection = useSelector((state) => state.departmentReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDepartments());
  }, []);
  return (
    <section className="departmentsContainer">
      {departmentsCollection.map((department) => (
        <div className="departmentElement" key={department.displayName}>
          <Department
            id={department.departmentId}
            name={department.displayName}
            imageUrl={department.imageUrl}
          />
        </div>
      ))}
    </section>
  );
};
export default Departments;
