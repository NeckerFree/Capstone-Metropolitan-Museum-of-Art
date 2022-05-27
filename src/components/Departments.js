import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import '../index.css';
import Department from './Department';
import { getAllDepartments } from '../redux/departments/departmentActions';

const Departments = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const departmentsCollection = useSelector((state) => state.departmentReducer);

  useEffect(() => {
    if (!departmentsCollection.lenght) dispatch(getAllDepartments());
  }, [dispatch]);

  const filteredDepartments = departmentsCollection.filter((department) => department.displayName
    .toLowerCase().includes(search.toLowerCase()));

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <section className="pageContainer">
      <h3 className="sectionHeader">Departments</h3>
      <div className="searchDivDeparatment">
        <input className="input-style" type="text" placeholder="Search Department" onChange={handleChange} data-testid="search-1" />
      </div>
      <section className="departmentsContainer" data-testid="container-a">
        {filteredDepartments.map((department) => (
          <div className="departmentElement" key={department.displayName}>
            <Department
              id={department.departmentId}
              name={department.displayName}
              imageUrl={department.imageUrl}
              count={department.count}
            />
          </div>
        ))}
      </section>
    </section>

  );
};
export default Departments;
