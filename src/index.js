import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
//import reportWebVitals from "./reportWebVitals";
 import "./styles/styles.scss"; //importe la feuille de style situé à la même racine

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") //connecté à index.html par id="root" dans (public/media/..)
);

//reportWebVitals();

//App.js est renvoyé ici dans index.js , qui elle même est renvoyé dans le 'root" dans l'index.html
