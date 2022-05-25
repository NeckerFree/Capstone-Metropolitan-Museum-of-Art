import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

const Piece = (props) => {
  const {
    objectID, primaryImage, title, artistDisplayName, objectName, medium,
  } = props;

  return (
    <div className="pieceButton">
      <img id={objectID} src={primaryImage} className="buttonImage" alt={title} />
      <div className="pieceDetail">{title}</div>
      <div className="pieceDetail">{objectName}</div>
      <div className="pieceDetail">{medium}</div>
      <div className="pieceDetail">{artistDisplayName}</div>

    </div>
  );
};
Piece.propTypes = {
  objectID: PropTypes.number.isRequired,
  primaryImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artistDisplayName: PropTypes.string.isRequired,
  objectName: PropTypes.string.isRequired,
  medium: PropTypes.string.isRequired,
};
export default Piece;
