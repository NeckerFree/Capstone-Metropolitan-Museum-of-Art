import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

const Piece = (props) => {
  const {
    objectId, primaryImage, title, artistDisplayName, objectName, medium,
  } = props;

  return (
    <div className="pieceButton">
      <img id={objectId} src={primaryImage} className="buttonImagePiece" alt={title} />
      <div className="pieceDetail">
        <div className="pieceTitle">{title}</div>
        <div className="artist">{artistDisplayName}</div>
        <div className="pieceDescription">
          <div className="objectName">{objectName}</div>
          <div className="medium">{medium}</div>
        </div>
      </div>
    </div>
  );
};
Piece.propTypes = {
  objectId: PropTypes.number.isRequired,
  primaryImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artistDisplayName: PropTypes.string.isRequired,
  objectName: PropTypes.string.isRequired,
  medium: PropTypes.string.isRequired,
};
export default Piece;
