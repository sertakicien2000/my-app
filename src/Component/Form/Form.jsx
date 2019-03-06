import React from 'react';
 
export default class Form extends React.Component {
   render() {
      return (
        <div>
            <label>Nom</label>
            <input placeholder="Votre nom" className="nom"></input>
            <label>Prenom</label>
            <input placeholder="Votre prenom" className="prenom"></input>
            <button className="btn btn-success">AJOUTER</button>
        </div>
      )
   }
}