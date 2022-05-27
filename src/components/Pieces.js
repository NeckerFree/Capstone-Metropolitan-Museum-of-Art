import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../index.css';
import getObjectsByDepartment from '../redux/objectsIds/objectsIdsActions';
import Piece from './Piece';
import backImage from '../icons/back.png';

const Pieces = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const piecesDetail = useSelector((state) => state.objectsReducer);
  const { id } = useParams();

  useEffect(() => {
    if (!piecesDetail.length) {
      dispatch(getObjectsByDepartment(id));
    }
  }, []);

  const handleBack = () => {
    window.location.href = '/';
  };

  const filteredPieces = piecesDetail.filter((piece) => piece.title
    .toLowerCase().includes(search.toLowerCase()));

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <section className="pageContainer">
      <h3>Pieces</h3>
      <div className="pageHead">
        <button type="button" className="backButton" tabIndex={id} onClick={handleBack} onKeyDown={handleBack}>
          <img src={backImage} alt="back" />
        </button>
        <div className="searchDivPieces">
          <input className="input-style" type="text" placeholder="Search piece name" onChange={handleChange} data-testid="search-2" />
        </div>
      </div>
      <section className="piecesContainer" data-testid="container-b">
        {filteredPieces.map((piece) => (
          <div className="pieceElement" key={piece.title}>
            <Piece
              objectId={piece.objectID}
              primaryImage={piece.primaryImage}
              title={piece.title}
              artistDisplayName={piece.artistDisplayName}
              objectName={piece.objectName}
              medium={piece.medium}
            />
          </div>
        ))}
      </section>
    </section>
  );
};
export default Pieces;
