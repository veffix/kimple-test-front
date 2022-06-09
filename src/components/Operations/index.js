// == Import
import PropTypes from 'prop-types';
import Operation from '../Operation';

// == Composant
function Operations({
  operations,
  setSelectedOperation,
  selectedOperation,
}) {
  return (
    <div className="row g-2 gx-5">
      {operations.map(
        (operation) => (
          <Operation
            key={operation.hash_id}
            {...operation}
            setSelectedOperation={setSelectedOperation}
            selectedOperation={selectedOperation}
          />
        ),
      )}
    </div>
  );
}

Operations.propTypes = {
  operations: PropTypes.array.isRequired,
  setSelectedOperation: PropTypes.func.isRequired,
  selectedOperation: PropTypes.array.isRequired,
};

// == Export
export default Operations;
