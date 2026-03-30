import { useState } from 'react'
import './App.css'
import { Login } from './Login'
import { Home } from './Home'
import { Book } from './Book'
import { Books } from './Books'
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'

function App() {

    const [token, setToken] = useState(localStorage.getItem("token") || "")
    const [books, setBooks] = useState([])
    const navigate = useNavigate()
    const [success, setSuccess] = useState("")


    const handleConnexion = async (email, password) => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/login_check', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'username': `${email}`,
                    'password': `${password}`
                })
            });

            const data = await response.json()
            
            if(response.ok) {
                localStorage.setItem("token", data.token)
                setToken(`${data.token}`)
                navigate('/home') 
            } else {
                setSuccess("identifiants invalides")
            }
            
        } catch {
            setSuccess("erreur de connexion !")
        }
    }


    const goFetch = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/books', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            const results = await response.json();
            setBooks(results.member);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (token) {
            goFetch();
        }
    }, [token]);


    
    return (
        <section className='flex justify-center items-center min-h-screen bg-slate-950 text-white overflow-hidden gap-3 '>
            <Routes>
                <Route path="/" element={<Login handleConnexion={handleConnexion} success={success}/>}/>
                <Route path="/home" element={<Home books={books}/>}/>
                <Route path="/books" element={<Books books={books} token={token}/>}/>
                <Route path="/book/:id" element={<Book token={token} />}/>
            </Routes>
        </section>     
  )
}

export default App 