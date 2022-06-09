// == Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

import ButtonFilter from './ButtonFilter';

import './buttonFilter.scss';

// == Composant
function Filters({ setMounth, setYear, setCategory }) {
  const [buttonMounthSelected, setbuttonMounthSelected] = useState('');
  const [buttonYearSelected, setbuttonYearSelected] = useState('');

  return (
    <div className="row">
      <div className="col-sm-12 col-md-auto me-3 order-1">
        <p className="m-0 fs-6"><small>Mois</small></p>
        <ButtonFilter setFilter={setMounth} filter={1} text="janv." setbuttonSelected={setbuttonMounthSelected} buttonSelected={buttonMounthSelected} />
        <ButtonFilter setFilter={setMounth} filter={2} text="févr." setbuttonSelected={setbuttonMounthSelected} buttonSelected={buttonMounthSelected} />
        <ButtonFilter setFilter={setMounth} filter={3} text="mars." setbuttonSelected={setbuttonMounthSelected} buttonSelected={buttonMounthSelected} />
        <ButtonFilter setFilter={setMounth} filter={4} text="avr." setbuttonSelected={setbuttonMounthSelected} buttonSelected={buttonMounthSelected} />
        <ButtonFilter setFilter={setMounth} filter={5} text="mai." setbuttonSelected={setbuttonMounthSelected} buttonSelected={buttonMounthSelected} />
        <ButtonFilter setFilter={setMounth} filter={6} text="juin" setbuttonSelected={setbuttonMounthSelected} buttonSelected={buttonMounthSelected} />
        <ButtonFilter setFilter={setMounth} filter={7} text="juill." setbuttonSelected={setbuttonMounthSelected} buttonSelected={buttonMounthSelected} />
        <ButtonFilter setFilter={setMounth} filter={8} text="août" setbuttonSelected={setbuttonMounthSelected} buttonSelected={buttonMounthSelected} />
        <ButtonFilter setFilter={setMounth} filter={9} text="Sept." setbuttonSelected={setbuttonMounthSelected} buttonSelected={buttonMounthSelected} />
        <ButtonFilter setFilter={setMounth} filter={10} text="Oct." setbuttonSelected={setbuttonMounthSelected} buttonSelected={buttonMounthSelected} />
        <ButtonFilter setFilter={setMounth} filter={11} text="Nov." setbuttonSelected={setbuttonMounthSelected} buttonSelected={buttonMounthSelected} />
        <ButtonFilter setFilter={setMounth} filter={12} text="Déc." setbuttonSelected={setbuttonMounthSelected} buttonSelected={buttonMounthSelected} />
      </div>
      <div className="col-12 col-md-auto me-4 order-2">
        <p className="m-0 fs-6"><small>Année</small></p>
        <ButtonFilter setFilter={setYear} filter={2018} text="2018" setbuttonSelected={setbuttonYearSelected} buttonSelected={buttonYearSelected} />
        <ButtonFilter setFilter={setYear} filter={2019} text="2019" setbuttonSelected={setbuttonYearSelected} buttonSelected={buttonYearSelected} />
        <ButtonFilter setFilter={setYear} filter={2020} text="2020" setbuttonSelected={setbuttonYearSelected} buttonSelected={buttonYearSelected} />
        <ButtonFilter setFilter={setYear} filter={2021} text="2021" setbuttonSelected={setbuttonYearSelected} buttonSelected={buttonYearSelected} />
      </div>
      <div className="col-12 col-xxl-auto order-4 order-xxl-3">
        <button
          type="button"
          className="btn btn-dark btn-sm mr-1 mb-1 mt-4 py-0"
          onClick={() => {
            setYear(null); setMounth(null); setCategory(null); setbuttonMounthSelected(''); setbuttonYearSelected('');
          }}
        >Effacer les filtres
        </button>
      </div>
      <div className="col-12 col-xxl-auto order-5 order-xxl-4 d-xxl-flex flex-row flex-grow-1 justify-content-end">
        <button type="button" className="btn btn-success mb-1 mt-3 py-0" style={{ backgroundColor: '#60b93f' }}>Créer une nouvelle opération</button>
      </div>
      <div className="col-12 order-3 order-xxl-5">
        <Dropdown>
          <Dropdown.Toggle size="sm" className="bg-dark" id="dropdown-basic">
            Filtrer par mécanique<FontAwesomeIcon className="ms-3 me-1 fa-lg" icon="fa-solid fa-angle-down" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setCategory([1, 'PUBLIÉ'])}>PUBLIÉ</Dropdown.Item>
            <Dropdown.Item onClick={() => setCategory([2, 'EN ATTENTE'])}>EN ATTENTE</Dropdown.Item>
            <Dropdown.Item onClick={() => setCategory([3, 'TERMINÉ'])}>TERMINÉ</Dropdown.Item>
            <Dropdown.Item onClick={() => setCategory([4, 'EN COURS DE CLÔTURE'])}>EN COURS DE CLÔTURE</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

Filters.propTypes = {
  setMounth: PropTypes.func.isRequired,
  setYear: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
};

// == Export
export default Filters;
