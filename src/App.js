import React, { useState } from 'react';
import Tableau from './Component/Tableau/Tableau';
import Form from './Component/Form/Form';

import './App.css';
import './Component/Form/Form.css'
import './Component/Tableau/Tableau.css'

const App = () => {
    const usersData = []
  
    const [ users, setUsers ] = useState(usersData)

    const ajouter = user => {
      user.id = users.length + 1
      setUsers([ ...users, user ])
    }

    const suppr = id => {
        setUsers(users.filter(user => user.id !== id))
    }

    return (
      <div className="container">
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