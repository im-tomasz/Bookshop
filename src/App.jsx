import { useState } from 'react'
import './App.css'

function App() {

    const [books, setBooks] = useState([])
    const [token, setToken] = useState("")

    const goFetch = async () => {
        const response = await fetch('http://localhost:8000/api/books', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        const results = await response.json()
        setBooks(results.member)
    }

    const handleConnexion = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/login_check', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': 'thomas@live.fr',
                'password': 'motdepasse'
            })
        });
        const data = await response.json()
        setToken(data.token)
    }
    
    return (
        <>
        <button onClick={() => goFetch() } >fetch</button>
        <button onClick={() => handleConnexion()}>connexion</button>
        </>
  )
}

export default App 