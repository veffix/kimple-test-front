/* eslint-disable react/require-default-props */
// == Import
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Composants
import TitleOperations from '../TitleOperations';
import Operations from '../Operations';

// data, styles et utilitaires
import operationsData from '../../data/operations.json';
// == Composant
function SectionOperations({
  mouth,
  year,
  category,
  setSelectedOperation,
  selectedOperation,
}) {
  // On prépare une variable d'état pour stocker nos opérations
  const [operations, setOperations] = useState(operationsData);

  // Depuis le tableau, on veut récupérer les opérations d'un mois donné
  const getOperationsByMouth = (operationsArray, mouthNumber) => {
    const filteredOperations = operationsArray.filter(
      (operation) => new Date(operation.start_at).getUTCMonth() + 1 === mouthNumber
      || new Date(operation.finish_at).getUTCMonth() + 1 === mouthNumber,
    );
    return filteredOperations;
  };

  // Depuis le tableau, on veut récupérer les opérations d'une année donnée
  const getOperationsByYear = (operationsArray, yearNumber) => {
    const filteredOperations = operationsArray.filter(
      (operation) => new Date(operation.start_at).getUTCFullYear() === yearNumber
      || new Date(operation.finish_at).getUTCFullYear() === yearNumber,
    );
    return filteredOperations;
  };

  // Depuis le tableau, on veut récupérer les opérations d'une année donnée
  const getOperationsByCategory = (operationsArray, categoryNumber) => {
    const filteredOperations = operationsArray.filter(
      (operation) => operation.state === categoryNumber,
    );
    return filteredOperations;
  };

  // Application de tous les filtres puis envoie du nouveau tableau dans le state operations
  useEffect(() => {
    let result = operationsData;
    if (year) {
      result = getOperationsByYear(result, year);
    }
    if (mouth) {
      result = getOperationsByMouth(result, mouth);
    }
    if (category) {
      result = getOperationsByCategory(result, category[0]);
    }
    setOperations(result);
  }, [mouth, year, category]);

  return (
    <>
      <TitleOperations mouth={mouth} year={year} category={category} />
      {operations.length > 0
        ? (
          <Operations
            operations={operations}
            mouth={mouth}
            year={year}
            category={category}
            setSelectedOperation={setSelectedOperation}
            selectedOperation={selectedOperation}
          />
        )
        : <> </>}
    </>
  );
}

SectionOperations.propTypes = {
  mouth: PropTypes.number,
  year: PropTypes.number,
  setSelectedOperation: PropTypes.func.isRequired,
  selectedOperation: PropTypes.array.isRequired,
  category: PropTypes.array,
};

// == Export
export default SectionOperations;
