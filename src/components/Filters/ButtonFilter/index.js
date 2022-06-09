// == Import
import PropTypes from 'prop-types';

// == Composant
function ButtonFilter({
  setFilter,
  filter,
  text,
  setbuttonSelected,
  buttonSelected,
}) {
  return (
    <button
      type="button"
      className={buttonSelected === text ? 'btn btn-dark btn-sm me-1 mb-1 py-0 bg-danger' : 'btn btn-dark btn-sm me-1 mb-1 py-0'}
      onClick={() => {
        setFilter(filter); setbuttonSelected(text);
      }}
    >
      {text}
    </button>
  );
}

ButtonFilter.propTypes = {
  text: PropTypes.string.isRequired,
  filter: PropTypes.number.isRequired,
  setFilter: PropTypes.func.isRequired,
  buttonSelected: PropTypes.string.isRequired,
  setbuttonSelected: PropTypes.func.isRequired,
};

// == Export
export default ButtonFilter;
