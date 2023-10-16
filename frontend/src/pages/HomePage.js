import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../context/AuthContext'



const HomePage = () => {
  let [notes, setNotes] = useState([])
  let { authTokens } = useContext(AuthContext)
  useEffect(() => {

    getNotes()
  }, [])
  let getNotes = async() => {
    let response = await fetch('http://localhost:8000/api/notes/', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        'Authorization': "Bearer" + String(authTokens.access)

      }
    })
    console.log('data::::')

    let data = await response.json()
    console.log('data::::', data)
    setNotes(data)
  }
  return (
    <div>
      <p> You are logged in to the homepage.</p>
      <ul>
        {notes.map(note  => (
          <li> {note.body}</li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage
