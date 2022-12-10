import React, { Component } from "react";
//import portfolioData from '../../data/portfolioData'; si portfolioData sans accolade on importe la page entière! on veaut importer l'objet donc:
import { portfolioData } from "../../data/portfolioData"; // on importe l'objet portfolioData
import Project from "./Project";

class ProjectList extends Component {
  //C'est un class compnent donc rcc (commande raccourci pour créer la fonction)
  state = {
    projects: portfolioData, // quand on appelera projects se sera l'équivalent à tte la data de portfolioData
    radios: [
      { id: 1, value: "css" },
      { id: 2, value: "javascript" },
      { id: 3, value: "vueJs" },
      { id: 4, value: "react" },
    ],
    selectedRadio: "css", //placé sur javascript de base par défaut
  };

  handleRadio = (event) => {
    console.log(event.target.value);
    let radio = event.target.value; //pour donner la valeur à radio
    this.setState({ selectedRadio: radio }); // mise à jour de la valeur passée à selectedRadio
  };

  //pour obtenir le rendu
  render() {
    // destructuring des familles projects et radio et selectedRadio:

    let { projects, radios, selectedRadio } = this.state; //dc this.state équivaut à projects
    return (
      <div className="portfolioContent">
        <ul className="radioDisplay">
          {radios.map((radio) => {
            return (
              <li key={radio.id}>
                <input
                  type="radio"
                  name="radio"
                  checked={radio.value === selectedRadio} // si la valeur match il devien checked
                  value={radio.value}
                  onChange={this.handleRadio}
                />
                {/* label rattaché à l'id du input qui va permettre d'afficher la value du langage en data ds le state*/}
                <label htmlFor={radio.value}>{radio.value}</label>
              </li>
            );
          })}
        </ul>

        <div className="projects">
          {projects
          .filter(item => item.languages.includes(selectedRadio))//méthode filter pour sélectionner les item qui contiennent les langages spécifiés
          .map((item) => {
            //map tout les item de projects  donc le state de ProjectList (this.state) dont le state est l'équivalent de : portfolioData dans data (dans src)  pour un item c'est la map d'un élément
            return (
              <Project
                // s'il n' ya pas de key cela affichera dans la console: Warning: Each child in a list should have a unique "key" prop.
                key={item.id}
                item={item}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProjectList;
