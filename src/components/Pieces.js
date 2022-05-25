import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { goBack } from 'react-router-redux';
import '../index.css';
import Piece from './Piece';
import getObjectsByDepartment from '../redux/pieces/pieceActions';

const Pieces = () => {
  const piecesCollection = useSelector((state) => state.objectsReducer);
  const dispatch = useDispatch();
  //useEffect(() => {
    const { id } = useParams();
    dispatch(getObjectsByDepartment(id));
  //}, []);
  return (
    <section className="piecesContainer">
      <button type="button" onClick={() => goBack}>Go Back</button>
      {piecesCollection.map((piece) => (
        <div className="pieceElement" key={piece.displayName}>
          <Piece
            objectID={piece.objectID}
            primaryImage={piece.primaryImage}
            title={piece.title}
            artistDisplayName={piece.artistDisplayName}
            objectName={piece.objectName}
            medium={piece.medium}
          />
        </div>
      ))}
    </section>
  );
};
export default Pieces;
