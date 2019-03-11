import React, { useState } from 'react';
import Tableau from './Tableau';
import Form from './Form';

import './App.css';
import './Form.css'
import './Tableau.css'

const App = () => {
    const usersData = []
  
    const [ users, setUsers ] = useState(usersData)

    const ajouter = user => {
			user.id = users.length

      setUsers([ ...users, user ])
    }

    const suppr = id => {
        setUsers(users.filter(user => user.id !== id))
    }

    return (
      <div className="container bg-danger">
      <div className="flex-row">
        <div className="flex-large">
          <Form ajouter={ajouter} />
        </div>
        <div className="flex-large">
          <Tableau users={users} suppr={suppr}/>
        </div>
      </div>
    </div>
    )
  };

export default App;