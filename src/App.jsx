import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Form from './Components/Form'
import ListGroup from './Components/ListGroup'
import { UserProvider } from './Providers/UserContext'


const App = () => {


  // By props simple array of object 


  // const users = [
  // {
  //   id : 1,
  //   name : 'Aastha',
  //   Email : "aastha@gmail.com"
  // },
  // {
  //   id : 2,
  //   name : 'Balram',
  //   Email : "balram@gmail.com"
  // },
  // {
  //   id : 1,
  //   name : 'Ankit',
  //   Email : "ankit@gmail.com"
  // }]


  // by using state 

  

  return (
    <UserProvider>
      <Navbar/>
      <Form/>
      <ListGroup/>
    </UserProvider>
  )
}

export default App