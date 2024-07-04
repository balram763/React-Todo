import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../Providers/UserContext'

const Form = () => {
  const {AddUser,updateUser,edit} = useContext(UserContext)

  const [name ,setName] = useState('')
  const [email ,setEmail] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(edit.isEdit){
      updateUser({
        id : edit.user.id,
        name,
        email,
      })
    }
    else{
      AddUser(name,email)
    }
    setName("")
    setEmail("")
  }

  useEffect(()=>{
    setEmail(edit.user.email)
    setName(edit.user.name)
  },[edit]);

  return (
    <>

    <div className="container card p-6 shadow my-5">

      <h1 className='text-center text-primary'>Todo</h1>

      <form onSubmit={(e)=>handleSubmit(e)}  className='p-5'>
        <input type="text" placeholder='Enter Your Name' className="my-3 p-2 form-control"
        onChange={(e)=>setName(e.target.value)}
        value={name}
         />
        <input type="email" placeholder='Enter Your Email' className="my-3 p-2 form-control" 
        onChange={(e)=>setEmail(e.target.value)}
        value={email}/>
        <button className="btn btn-success form-control my-3">
          SUBMIT
        </button>
      </form>


    </div>
    
    </>
  )
}

export default Form