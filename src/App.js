
import './App.css';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/src/modal.js';
import $ from "jquery";
const App = () => {
  const usersData = [
  ]

  const [ users, setUsers ] = useState(usersData)
  const addUser = user => {
		user.id = users.length
		setUsers([ ...users, user ])
  }
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
	}
	$(function() {
		$('a[data-confirm]').click(function() {
			var href = $(this).attr('href');
			
			if (!$('#dataConfirmModal').length) {
				$('body').append('<div id="dataConfirmModal" class="modal" role="dialog" aria-labelledby="dataConfirmLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h3 id="dataConfirmLabel" style="text-align:center">Confimer la suppression ?</h3></div><div class="modal-footer"><button class="btn" data-dismiss="modal" aria-hidden="true">Non</button><a class="btn btn-danger" id="dataConfirmOK">Oui</a></div></div></div></div>');
			}
			$('#dataConfirmModal').find('.modal-td').text($(this).attr('data-confirm'));
			$('#dataConfirmOK').attr('href', href);
			$('#dataConfirmModal').modal({show:true});
			
			return false;
		});
	});

	return (
		<div className="container bg-danger">
			<div className="flex-row">
				<div className="flex-large">
          <AddUserForm addUser={addUser} />
					<pop1 />
				</div>
				<div className="flex-large">
          <UserTable users={users} deleteUser={deleteUser}/>
				</div>
			</div>
		</div>
	)
}

//Ajout
const UserTable = props => (
 
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
    {props.users.length > 0 ? (
				props.users.map(user => (
					<tr key={user.id} className='modal-td'>
          <td scope="col">{user.id}</td>
						<td>{user.name}</td>
						<td>{user.username}</td>
						<td>
							<a href=" " data-confirm=" "><button className="btn btn-danger" >X</button></a>
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
const AddUserForm = props => {
  const initialFormState = { id: '', name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}
	return (
		<form onSubmit={event => {
      event.preventDefault()
      props.addUser(user)
      setUser(initialFormState)
    }}>
			<label id="buton">Nom</label>
			<input id="buton" type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label id="buton">Prénom</label>
			<input id="buton" type="text" name="username" value={user.username} onChange={handleInputChange}  />
			<button class="btn btn-primary" id="buton">AJOUTER</button>
		</form>
	)
}
	
  export default App;

