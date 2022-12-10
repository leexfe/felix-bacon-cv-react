import React from 'react';
import { NavLink } from 'react-router-dom';// linker pour orienter le visiteur

const NotFound = () => {
  return (
    <div className='notFound'>
      <div className="notFoundContent">
        <h3>Désolé cette page n'éxiste pas ! </h3>
        <NavLink exact to ="/">
          {/* renvoie à la page d'accueil */}
          <i className="fas fa-home"></i>
          <span> Accueil </span>
          </NavLink>
      </div>
    </div>
  );
};

export default NotFound;