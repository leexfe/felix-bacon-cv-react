import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";
//installer plugin pour copier un lien en cliquant avec: npm i react-copy-to-clipboard  dans terminal
//désinstaller : npm uninstall + package name
//installer version 5.0.2  npm install [package-name]@[version-number] : npm i react-copy-to-clipboard@5.0.2
const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Toulouse</span>
            </li>
            <li>   
            <span className="text-color">Cliquez pour copier : </span></li>
            <li class="bloc-email">
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0674859941">
                <span
                  className="clickInput "
                  onClick={() => {
                    alert("Telephone copié ! ");
                  }}
                >
                  06 74 85 99 41
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <CopyToClipboard text="felixbacon31500@gmail.com">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Email copié ! ");
                  }}
                >
                  felixbacon31500@gmail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a href="https://www.linkedin.com/in/felixbacon/" target="_blank" rel="noopener noreferrer">
              <h4>Linkedin</h4>
              <i className = "fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/leexfe" target="_blank" rel="noopener noreferrer">
              <h4>Github</h4>
              <i className = "fab fa-github"></i>
            </a>
            <a href="https://twitter.com/feldevweb" target="_blank" rel="noopener noreferrer">
              <h4>Twitter</h4>
              <i className = "fab fa-twitter"></i>
            </a>
            <a href="https://codepen.io/" target="_blank" rel="noopener noreferrer">
              <h4>Codepen</h4>
              <i className = "fab fa-codepen"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
