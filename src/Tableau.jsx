import React, {Component} from 'react';
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class Tableau extends Component {
  submit = (e) => {
    confirmAlert({
      title: '',
      message:"Confirmer la Suppression?",
      buttons: [
        {
          label: 'OUI',
          onClick: () => this.props.suppr(e)
        },
        {
          label: 'NON',
          onClick: () => console.log('suppression refusée')
        }
      ]
    })
  }
  render() {
    return(
      <table className="table table-hover table-bordered">
      <thead>
        <tr className="table-primary">
          <th scope="col" className="act">id</th>
          <th scope="col">Nom</th>
          <th scope="col">Prénom</th>
          <th scope="col" className="act">Actions</th>
        </tr>
      </thead>
      <tbody>
        {this.props.users.length > 0 ? (
          this.props.users.map(user => (
            <tr>
              <td>{user.id}</td>
              <td>{user.nom}</td>
              <td>{user.prenom}</td>
              <td>
          <button aria-label="Supprimer" id="suppr" className="btn btn-danger"
            onClick={() => this.submit(user.id)}>X</button>
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
      }
    }


export default Tableau;