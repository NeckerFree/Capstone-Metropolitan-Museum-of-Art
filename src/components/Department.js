import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';
import { useDispatch } from 'react-redux';
import { removeDepartment } from '../redux/departments/departmentActions';

const Department = (props) => {
  const {
    id, name, description, classType, status,
  } = props;
  const dispatch = useDispatch();
  const handleRemoveDepartment = (event) => {
    dispatch(removeDepartment(event.target.id));
  };
  return (
    <section className="departmentRow">
      <section className={classType}>
        <div className="department">
          <p>{name}</p>
        </div>
        <div className="departmentDescription">
          <p>{description}</p>
        </div>
        <div className="departmentStatus">
          <p>{status}</p>
        </div>
        <div className="departmentButton">
          <input id={id} type="submit" onClick={handleRemoveDepartment} value="Join Department" />
        </div>
      </section>
    </section>
  );
};
Department.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  classType: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
export default Department;
