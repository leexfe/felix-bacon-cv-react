// import React from 'react';

// const Languages = () => {// react stateless
//   return (
//     <div>
//       Languages et frameworks
//     </div>
//   );
// };

// export default Languages;


import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {//react class component
  state = {
    languages : [//1er tableau languages
      {id : 1 , value : "HTML", xp: 2.005},
      {id : 2 , value : "CSS", xp: 1.5},
      {id : 3 , value : "Javascript", xp: .8},
      {id : 4 , value : "SQL", xp: .4},
    ],
  frameworks: [//2è tableau frameworks
    
    {id : 1 , value : "Bootstrap", xp: 0.8},
    {id : 2 , value : "Sass", xp: 1},
    {id : 3 , value : "VueJs", xp: .5},
    {id : 4 , value : "React", xp: .7},
  ]
 }
  render() {
    let{ languages, frameworks} = this.state;// this représente la class: Languages à la base de la fonction
    // donc this.state.languages et this.state.frameworks pour être dans les objets en question:(on point les éléments)
    return (// stocké ds une div qui regroupe les deux éléments qui englobe deux components progressbar
      //html classique stocké de façon dynamique
     <div className="languagesFrameworks">
       {/* dans le component, on lui envoie la props languages */}
       <ProgressBar
       languages = {languages}//donc on lui envoie notre tableau
       title = "languages"
       className ="languagesDisplay"// affichage de languages
      
       />
       <ProgressBar
       languages = {frameworks}
       title= "frameworks & bibliothèques"
       className="frameworksDisplay"
       
       />

     </div>
    );
  }
}

export default Languages;

// on peut y ajouter un state dans lequel on va stocker des choses
// la partie fonction flêché qui renvoie klke chose en jsx

