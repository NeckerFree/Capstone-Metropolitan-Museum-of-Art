import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import '../index.css';

const Department = (props) => {
  const { id, name, imageUrl } = props;
  const handleRedirectToDetails = (event) => {
    push(`pieces/?${event.target.id}`);
  };
  return (
    <div role="button" className="departmentButton" tabIndex={id} onClick={handleRedirectToDetails} onKeyDown={handleRedirectToDetails}>
      <img id={id} src={imageUrl} className="buttonImage" alt="test" />
      <div className="departmentName">{name}</div>
    </div>
  );
};
Department.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};
export default Department;
