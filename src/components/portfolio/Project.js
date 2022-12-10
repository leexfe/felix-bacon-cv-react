import React, { Component } from "react";

class Project extends Component {
  //le state renferme la data initiale
  state = {
    // la touche + ouvre une card avec des informations (popup)
    showInfo: false, //montre les information placé sur false par défaut
  };
  //fonction appelée au clique pour faire apparaitre et disparaitre la card popup
  handleInfo = () => {
    //mettre à jour le state avec cette commande
    this.setState({
      showInfo: !this.state.showInfo, //on transmet la valeur à showInfo qui sera l'inverse et donc le passe sur true
    });
  };

  render() {
    console.log(this.props); // c'est un class Component donc this.item pour avoir accès aux items ds la console
    let { name, languagesIcons, source, link, picture } = this.props.item; // pour chaque item, tu appliques les props nommées en paramètre
    return (
      //destructuring pour éviter d'avoir à se faire des this.props, etc...

      // <h3>{name}</h3>
      <div className="project">
        <div className="icon">
          {languagesIcons.map((icon) => (
            <i className={icon} key={icon}></i>
          ))}
        </div>
        <h3>{name}</h3>
        <img src={picture} alt="" onClick={this.handleInfo} />
        <span className="infos" onClick={this.handleInfo}>
          <i className="fas fa-plus-circle"></i>
        </span>

        {/* popup card d'apparition s'il est true revient à faire un if */}
        {/* && la condition qui déclenche le JSX qui tourne derrière */}
        {this.state.showInfo && (
          <div className="showInfos">
            <div className="infosContent">
              <div className="head">
                <div className="sourceCode">
                  <a
                    href={link}
                    rel="noopener noreferrer"
                    className="button"
                    target="_blank"
                  >
                    lien vers la page web
                  </a>
                </div>
                <div className="sourceCode">
                  {/* risque securité target_blank */}
                  {/* noopenner innterdit tout changement d’URL sur la page appelante. */}
                  {/* noreferrer privera également le site de destination de la réception d’un en-tête HTTP. */}
                  <a
                    href={source}
                    rel="noopener noreferrer"
                    className="button"
                    target="_blank"
                  >
                    {" "}
                    Code source
                  </a>
                </div>
              </div>
              {/* <p className="text">{info}</p> */}
               <img src={picture} alt=""></img> 

              <div className="button return" onClick={this.handleInfo}>
                Retourner sur portfolio
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Project;
