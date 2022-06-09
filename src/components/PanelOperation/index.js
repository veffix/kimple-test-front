// == Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

// == Composant
function PanelOperation({ selectedOperation }) {
  return (
    <div
      className="fixed-bottom text-light pt-4 pb-5"
      style={{
        backgroundColor: '#3e5167',
      }}
    >
      <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
        <div className="me-5 mt-1 mt-lg-0 d-flex justify-content-center">
          <p className="m-0">{selectedOperation.length} opération{selectedOperation.length > 1 ? 's' : ''} sélectionnée</p>
        </div>
        <button type="button" className="btn me-3 mt-3 mt-lg-0 text-light" style={{ backgroundColor: '#60b93f' }}><FontAwesomeIcon icon="fa-solid fa-file-export" className="me-1" />Exporter l'ensemble des statistiques</button>
        <button type="button" className="btn btn-danger me-3 mt-3 mt-lg-0"><FontAwesomeIcon icon="fa-regular fa-eye" className="me-1" />Masquer</button>
        <button type="button" className="btn me-3 mt-3 mt-lg-0 text-light" style={{ backgroundColor: '#f09327' }}><FontAwesomeIcon icon="fa-solid fa-layer-group" className="me-1" inverse />Grouper</button>
        <button type="button" className="btn btn-secondary me-3 mt-3 mt-lg-0"><FontAwesomeIcon icon="fa-solid fa-xmark" className="me-1" />Dégrouper</button>
      </div>
    </div>
  );
}

PanelOperation.propTypes = {
  selectedOperation: PropTypes.array.isRequired,
};

// == Export
export default PanelOperation;
