import { useState } from 'react'
import './App.css'
import { MyComponent } from './components/myComponent/MyComponent.jsx'

function App() {

    const [books, setBooks] = useState([])

    const goFetch = async () => {
        const response = await fetch('http://localhost:8000/api/books')
        const results = await response.json()
        setBooks(results.member)
    }
    
    return (
        <>
        <button onClick={() => goFetch() } >fetch</button>
        </>
  )
}

export default App
