import React from "react";
import { NavLink } from "react-router-dom"; // permet d'accéder de manière rapide à chaque lien
//Voir extension plugin react devtools: et components dans console google chrome
//en REACT on ne dit pas class mais className:
//On va coder les components de la Navbar:
const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          {/* <img src="./media/felix-img.jpg" alt="profil-pic" /> */}
          <img src="./media/photo-cv.jpg" alt="profil-pic" />
          {/* pour aller chercher l'image dans l'arborescence , le ./ avant média indique que l'on sort de components, donc on est au m^me niveau que media ds l'arborescence(noeuds), puis on séléctionne la photo felix-img */}
          <h3>Félix Bacon</h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              {/* le chemin exact de home */}
              {/* injecte un className que quand c'est active */}
              <i className="fas fa-home"></i>
              <span> Accueil</span>
            </NavLink>
          </li>

          <li>
            <NavLink exact to="/competences" activeClassName="navActive">
              {/* activeClassName signifie que si jamais il est cliqué, si on est dans l'URL /competences alors la class navActive va s'activer*/}
              <i className="fas fa-mountain"></i>
              <span> Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/portfolio" activeClassName="navActive">
              <i className="fas fa-image"></i>
              <span> Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <i className="fas fa-address-book"></i>
              <span> Contact </span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/felixbacon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/leexfe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/feldevweb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-codepen"></i>
            </a>
          </li>
        </ul>
        {/* <div className="signature">
          <p>FélixBaconCopyright-2022</p>
        </div> */}
      </div>
    </div>
  );
};

export default Navigation;
// on exporte par défaut la Navigation
//donc on va se le récupérer dans la page Home.js

//en appelant les NavLink depuis router-dom on peut donner les chemins que l'on veut
//on va s'importer la navigation dans les autres pages pour pouvoir switcher d'une page à l'autre
