import { createContext, useState } from 'react'

export const UserContext = createContext()

function Context(prop) {
    const [users, setUsers] = useState([
        {id: 0, username: "Rajan", city: "USA"},
        {id: 1, username: "Gaurav", city: "RUSSIYA"},
        {id: 2, username: "Satyam", city: "JAPAN"},
    ])

  return (
    <UserContext.Provider value={{users, setUsers}}> {prop.children} </UserContext.Provider>
  )
}

export default Context
