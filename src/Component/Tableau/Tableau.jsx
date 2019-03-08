import React from 'react';
const Tableau = props => (
      <table>
      <thead>
        <tr>
          <th className="act">id</th>
          <th>Nom</th>
          <th>Prénom</th>
          <th className="act">Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map(user => (
            <tr>
              <td>{user.id}</td>
              <td>{user.nom}</td>
              <td>{user.prenom}</td>
              <td>
          <button aria-label="Supprimer" id="suppr" className="btn btn-danger"
            onClick={() => {props.suppr(user.id)}}>X</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={4}>Aucun enregistrement</td>
          </tr>
        )}
      </tbody>
      </table>
)


export default Tableau;