import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Félix Bacon </h1>
          <h2>Développeur Web</h2>
          <div className="pdf">

            <a href="./media/CV_Dev_Web.pdf" target="_blank"> Télécharger CV</a>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Home;

//On va se chercher le component <Navigation />
//en faisant attention de bien refermer <Navigation/> à la fin />
