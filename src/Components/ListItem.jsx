import React, { useContext } from 'react'
import UserContext from '../Providers/UserContext'

const ListItem = ({user}) => {
    const {handleDelete,editUser} = useContext(UserContext)

  return (
    <>

        <li className="list-group-item d-flex justify-content-between align-item-center">
         <div>
         <h4>{user.name}</h4>
         <p>{user.email}</p>
         </div>

         <div>
            <button onClick={()=>editUser(user)} className="btn btn-warning btn-sm">
                EDIT
            </button>
            <button onClick={()=> handleDelete(user.id)} className="btn btn-danger btn-sm mx-3">
                DELETE
            </button>
         </div>
        </li>


    </>
  )
}

export default ListItem