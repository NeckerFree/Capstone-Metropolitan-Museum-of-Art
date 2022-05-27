//import { useSelector, useDispatch } from 'react-redux';
// import React from 'react';
//import React, { useEffect } from 'react';
// import '../index.css';
// import PropTypes from 'prop-types';
// import Piece from './Piece';
//import getObjectById from '../redux/pieces/pieceActions';

// const PieceInter = (props) => {
//   const { objectId, title } = props;
// const piece = useSelector((state) => state.piecesReducer);
// const dispatch = useDispatch();
// useEffect(() => {
//   dispatch(getObjectById(objectId));
// }, []);

//   return (
//     <section className="piecesContainer">
//       <div className="pieceElement">
//         <div>{objectId}</div>
//         <div>{title}</div>
//         {/* <Piece
//           objectId={objectId}
//           primaryImage={piece.primaryImage}
//           title={piece.title}
//           artistDisplayName={piece.artistDisplayName}
//           objectName={piece.objectName}
//           medium={piece.medium}
//         /> */}
//       </div>
//     </section>
//   );
// };
// PieceInter.propTypes = {
//   objectId: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
// };
// export default PieceInter;
