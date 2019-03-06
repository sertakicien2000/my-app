import React from 'react';
 
export default class Tableau extends React.Component {
   render() {
      return (
        <div>
            <table>
                <tr>
                    <th>id</th>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                </tr>
            </table>
        </div>
      )
   }
}