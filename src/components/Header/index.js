import React from 'react';

import './style.css';

const Header = () => (
  <header className="presentation">
    <img
      src="https://static.youmiam.com/images/recipe/1500x1000/les-crepes-24002?placeholder=web_recipe&sig=a134ac2b55be06a94e862199e8384a94e898f684&v3"
      alt="crepes"
      className="presentation-image"
    />
    <div className="presentation-content">
      <h1 className="presentation-title">Titre de la recette</h1>
      <p className="presentation-infos">Auteur difficulté</p>
    </div>
  </header>
);

// == Export
export default Header;
