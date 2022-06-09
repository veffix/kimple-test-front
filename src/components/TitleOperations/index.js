/* eslint-disable react/require-default-props */
// == Import
import PropTypes from 'prop-types';

// == Composant
function TitleOperations({ mouth, year, category }) {
  return (
    <div className="row mb-4">
      <div className="col">
        <hr style={{
          opacity: '1',
        }}
        />
      </div>
      <div className="col-md-auto">
        <p className="text-uppercase">Opérations
          {} {mouth ? Intl.DateTimeFormat('fr', { month: 'long' }).format(new Date(mouth.toString())) : ''} {year} {category ? category[1] : ''}
        </p>
      </div>
      <div className="col">
        <hr style={{
          opacity: '1',
        }}
        />
      </div>
    </div>
  );
}

TitleOperations.propTypes = {
  mouth: PropTypes.number,
  year: PropTypes.number,
  category: PropTypes.array,
};

// == Export
export default TitleOperations;
