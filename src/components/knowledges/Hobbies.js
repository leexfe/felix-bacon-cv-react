import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérêts</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-running"></i>
          <span>Randonnée</span>
        </li>
        <li className="hobby">
          <i className="fas fa-bicycle"></i>
          <span>Vélo</span>
        </li>
        <li className="hobby">
          <i className="fas fa-camera-retro"></i>
          <span>Photo</span>
        </li>
        <li className="hobby">
          <i className="fas fa-film"></i>
          <span>Cinéma</span>
        </li>
        <li className="hobby">
          <i className="fas fa-music"></i>
          <span>Musique</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
