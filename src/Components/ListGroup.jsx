import React, { useContext } from 'react'
import ListItem from './ListItem'
import UserContext from '../Providers/UserContext'

const ListGroup = () => {

    const {users} = useContext(UserContext)
  return (
    <>
    
    <div className='container card p-6 shadow my-5'>
      <ul className="list-group p-2">

        {
           users.map(user => <ListItem key={user.id} user={user}/>) 
        }
      </ul>
    </div>
    </>
  )
}

export default ListGroup