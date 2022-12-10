//App.js est le socle , il regroupe et connecte les pages entre elles:
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Switch} from "react-router";
import Home from "./pages/Home"; //tu sors du dossier style et rentres dans pages puis home
import Contact from "./pages/Contact";
import Knowledges from "./pages/Knowledges";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    // entre les balises div c'est du JSX (du html ds du react)
    //fragments ouverture  <> et  fermeture </> doivent impérativement enrouler le contenude l'Appli dans return
    //puis en dessous des fragments l'Appli va être entourré de router(BrowserRouter)
    //on va créer les différents chemins d'accès aux pages avec le Router et ses Route:
    <>
      <Router>
        <Switch>
        <Route path="/"exact component={Home} />
        <Route path="/competences" component={Knowledges} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} /> 
        <Route component={NotFound} />
       </Switch>
      </Router>
    </>
  );
};

export default App;

// puis l'Appli est envoyé dans index.js
//<Route path="/" comme le chemin
// le switch enroule  les routes . le principe du switch est de s'arreter une fois que la condition est remplie
//dès qu'il ya la barre slash il se dit que ça correspond et donc il s'arrète donc on rajoute exact après 
//On met une lettre Majuscule à chaque première lettre du Component
//testet dans barre de recherche: http://localhost:3000/fggfgfghghfgfgfdee pour afficher : "Not Found"