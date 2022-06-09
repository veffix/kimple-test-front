/* eslint-disable react/require-default-props */
/* eslint-disable camelcase */
// == Import
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// == Composant
function Operation({
  title,
  state,
  template,
  players,
  hash_id,
  start_at,
  finish_at,
  setSelectedOperation,
  selectedOperation,
}) {
  let stateString = '';
  let backgroundColor = '';
  if (state === 1) {
    stateString = 'Publié';
    backgroundColor = '#60b93f';
  }
  else if (state === 2) {
    stateString = 'En attente';
    backgroundColor = '#f38309';
  }
  else if (state === 3) {
    stateString = 'Terminé';
    backgroundColor = '#6c767e';
  }
  else if (state === 4) {
    stateString = 'En cours de clôture';
  }

  let picto = template;
  if (picto > 41) {
    picto += 60;
  }

  /* Ajout d'un hash donné dans le state selectedoperationsarray s'il n'y est pas présent
  et suppression à l'inverse */
  const addOrRemoveSelectedOperation = (hash) => {
    const selectedOperationsArray = [...selectedOperation];
    const exists = selectedOperationsArray.includes(hash);
    if (exists) {
      return selectedOperationsArray.filter((c) => c !== hash);
    }
    selectedOperationsArray.push(hash);
    return selectedOperationsArray;
  };

  // récuperation de start_at pour le transformer en une string de cette forme : "DD/MM/YY à HHhmm"
  const startAtString = new Date(start_at).toLocaleDateString('fr-FR', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).replace(':', 'h').replace(',', ' à');

  // récuperation de finish_at pour le transformer en une string de cette forme : "DD/MM/YY à HHhmm"
  const finishAtString = new Date(finish_at).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).replace(':', 'h').replace(',', ' à');

  const vignettes = ['2048', 'battle', 'calendrier', 'cassebrique', 'code', 'concoursphoto', 'cutcut', 'differences', 'fastcup', 'flap', 'formulaire', 'instagram', 'jackpot', 'jauge-sociale', 'jump', 'justeprix', 'landing', 'match3', 'memory', 'panier'];
  return (
    <div onClick={() => setSelectedOperation(addOrRemoveSelectedOperation(hash_id))} className="col-sm-6 col-xl-3" style={{ cursor: 'pointer' }}>
      <div className="bg-white shadow-sm text-center rounded-top pb-2 mb-5">
        <div
          className="bg-image position-relative d-flex justify-content-between align-items-start"
          style={{ backgroundImage: `url(/images/vignettes/vignette-${vignettes[Number(title.replace(/[^\d]/g, '')) - 1]}.png`, height: '125px' }}
        >
          <div className="mt-2 ms-2 rounded-circle d-flex" style={{ width: '20px', height: '20px', backgroundColor: selectedOperation.includes(hash_id) ? '#60b93f' : '#ffffff' }}>
            {selectedOperation.includes(hash_id) && <FontAwesomeIcon icon="fa-solid fa-check" size="xs" className="m-auto" inverse />}
          </div>
          <div className="position-relative text-white rounded d-inline-flex me-4" style={{ backgroundColor: backgroundColor, transform: 'translatey(-50%)' }}>
            <p className="mb-0 mx-4"><small>{stateString}</small></p>
          </div>
        </div>
        <div className="position-relative">
          <img alt="picto" className="position-absolute top-0 start-0 ms-2" src={`/images/picto/${picto}.png`} style={{ height: '35px', width: '35px' }} />
          <p className="mt-2 mb-1"><strong>{title}</strong></p>
          <div className="d-flex mb-3">
            <div className="w-50 text-end d-flex justify-content-end align-items-center pe-2">
              <FontAwesomeIcon icon="fa-regular fa-user" className="me-1" />
              <p className="m-0"><small>{players}</small></p>
            </div>
            <div className="w-50 text-start d-flex justify-content-start align-items-center ps-2">
              <FontAwesomeIcon icon="fa-solid fa-recycle" className="me-1" />
              <p className="m-0"><small>100%</small></p>
            </div>
          </div>
          <div className="row w-50 m-auto p-0">
            <div className="col p-0">
              <hr style={{
                opacity: '1',
              }}
              />
            </div>
            <div className="col-md-auto px-1 mb-2">
              <FontAwesomeIcon icon="fa-regular fa-calendar-days" className="fa-lg" />
            </div>
            <div className="col p-0">
              <hr style={{
                opacity: '1',
              }}
              />
            </div>
          </div>
          <p><small>Du {startAtString} au {finishAtString}</small></p>
        </div>
      </div>
    </div>
  );
}

Operation.propTypes = {
  title: PropTypes.string,
  state: PropTypes.number,
  template: PropTypes.number,
  players: PropTypes.number,
  hash_id: PropTypes.string,
  start_at: PropTypes.string,
  finish_at: PropTypes.string,
  setSelectedOperation: PropTypes.func,
  selectedOperation: PropTypes.array,
};

// == Export
export default Operation;
