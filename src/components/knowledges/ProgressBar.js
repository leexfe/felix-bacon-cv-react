import React from "react";

const ProgressBar = (props) => {// composant sans état , fonction créée avec le raccourci rsc : 
  // en paramètre c'est les props
  console.log(props);
  return (
    // on fait passer la classeName en props et on peut voir le html stocké de manière dynamique
    <div className={props.className}>
      <h3>{props.title}</h3>
      <div className="years">
        <span>Année d'expérience</span>
        <span>1 an</span>
        <span>2 ans</span>
      </div>
      <div>
        {props.languages.map((item) => {
          //props.languages fait appel aux deux tableaux et tu vas maper chaque élément que l'on a nommé item et chaque elmts du tableau devient un item que l'on va afficher selon certaines conditions
          let xpYears = 2; // nombre totale d'années sur la période étendue
          let progressBar = (item.xp / xpYears) * 100 + "%";//barre de progression  2= 100%
          return (
            <div key={item.id} className="languagesList">
              <li>{item.value}</li>
              <div className="progressBar" style={{ width: progressBar }}></div>
              {/* style intègre du style directement entre double accolade */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;

