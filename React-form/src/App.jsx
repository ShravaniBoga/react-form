import { useState } from 'react'
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddUser />
      <UsersList users={[]} />



    </>
  )
}

export default App
