import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {


    const handleDelete = (id) => {
        setUsers(
                users.filter(user => user.id !== id) 
        )
    }

    const AddUser = (name,email) => {
      let id = crypto.randomUUID()
      const newUser = {id,name,email}
      console.log(newUser)
      setUsers([newUser,...users ])
    }


    const [users , setUsers] = useState([{
        id : 1,
        name : 'Aastha',
        email : "aastha@gmail.com"
      },
      {
        id : 2,
        name : 'Balram',
        email : "balram@gmail.com"
      },
      {
        id : 3,
        name : 'Ankit',
        email : "ankit@gmail.com"
      }])

      const [edit,setEdit] = useState({
        user : {},
        isEdit : false,
      })


      const updateUser = (updateUser) => {
        setUsers(users.map(user => {
          if(user.id === updateUser.id){
            return updateUser;
          }
          else{
            return user
          }
        }))
        setEdit({
          user : {},
          isEdit : false
        });
      }

      const editUser = (user) => {
        setEdit(
          {
            user : user,
            isEdit : true
          }
        )
      }


    return(
        <UserContext.Provider value={{users,handleDelete,AddUser,updateUser,edit,editUser}}>{children}</UserContext.Provider>
    )
}


export default UserContext;