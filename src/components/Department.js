import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const Department = (props) => {
  const {
    id, name, imageUrl, count,
  } = props;
  const navigate = useNavigate();
  const handleRedirectToDetails = (event) => {
    const url = `/pieces/id:${event.target.id}`;
    navigate(url);
  };
  return (
    <div role="button" className="departmentButton" tabIndex={id} onClick={handleRedirectToDetails} onKeyDown={handleRedirectToDetails}>
      <img id={id} src={imageUrl} className="buttonImageDep" alt={name} />
      <div className="departmentName">{name}</div>
      <div className="objectsCount">
        {`Pieces: ${count}`}
      </div>
    </div>
  );
};
Department.propTypes = {
  id: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};
export default Department;
