// Import de npm
import React from 'react';

// Import du CSS
import './style.css';

// Import des composants
import Header from 'src/components/Header';

// Composant
function Recipe() {
  return (
    <div className="recipe">
      <Header />
      <ul>
        <li>Ingrédient 1 </li>
        <li>Ingrédient 2</li>
      </ul>
      <ol>
        <li>Etape 1 </li>
        <li>Etape 2 </li>
      </ol>
    </div>
  );
}

// Export de recipe
export default Recipe;
