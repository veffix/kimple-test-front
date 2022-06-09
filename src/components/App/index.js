// == Import
import { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

// Composants
import SectionOperations from '../SectionOperations';
import Filters from '../Filters';
import PanelOperation from '../PanelOperation';

// == Composant
function App() {
  // ajout des icons fontAwesome
  library.add(fas);
  library.add(far);

  // On prépare les variables d'état pour stocker les filtres
  const [mouth, setMounth] = useState(null);
  const [year, setYear] = useState(null);
  const [category, setCategory] = useState(null);

  // On prépare une variable d'état pour stocker les opérations sélectionnées
  const [selectedOperation, setSelectedOperation] = useState([]);

  return (
    <main className="bg-light p-4">
      <Filters setMounth={setMounth} setYear={setYear} setCategory={setCategory} />
      <div>
        {/* Si un ou des filtres sont choisi : */}
        {(mouth || year || category) && (
          <SectionOperations
            mouth={mouth}
            year={year}
            category={category}
            selectedOperation={selectedOperation}
            setSelectedOperation={setSelectedOperation}
          />
        )}
        {/* Si aucun filtre n'est choisi : */}
        {(!mouth && !year && !category) && (
          <>
            <SectionOperations
              category={[1, 'publié']}
              setSelectedOperation={setSelectedOperation}
              selectedOperation={selectedOperation}
            />
            <SectionOperations
              category={[2, 'En attente']}
              setSelectedOperation={setSelectedOperation}
              selectedOperation={selectedOperation}
            />
            <SectionOperations
              category={[3, 'Terminé']}
              setSelectedOperation={setSelectedOperation}
              selectedOperation={selectedOperation}
            />
            <SectionOperations
              category={[4, 'En cours de clôture']}
              setSelectedOperation={setSelectedOperation}
              selectedOperation={selectedOperation}
            />

          </>
        )}
      </div>
      {/* Apparition du composant PanelOperation si au moins 1 opération est sélectionnée */}
      {selectedOperation.length > 0 && <PanelOperation selectedOperation={selectedOperation} /> }
    </main>
  );
}

// == Export
export default App;
