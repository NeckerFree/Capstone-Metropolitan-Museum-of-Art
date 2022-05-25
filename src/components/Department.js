import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
//import { useLocation, useHistory } from "react-router-dom";
import '../index.css';

const Department = (props) => {
  const { id, name, imageUrl } = props;
const navigate=useNavigate();
  const handleRedirectToDetails = (event) => {
    //let history = useHistory();
    //history.push(`/pieces/?id=${event.target.id}`);
    const url = `/pieces/id:${event.target.id}`;
    navigate(url);
    //return <Navigate to={url} />;
    //<Link to="/account?name=yahoo">Yahoo</Link>
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
