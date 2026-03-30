import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { LoaderCircle } from 'lucide-react'

export function Book({ token }) {
    const { id } = useParams();
    // const book = books.find((selectedBook) => selectedBook.id === Number(id))
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true)

    const goFetchBook = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/books/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            const result = await response.json();
            setBook(result);
        } catch (error) {
            console.error('erreur lors de la récupération du livre :', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (token && id) {
            goFetchBook();
        }
    }, [token, id])

    if (loading) {
        return <p className="animate-spin"><LoaderCircle/></p>
    }

    return (
        <>
            <div className='mt-10 bg-slate-900 p-20 rounded-xl w-full'>
                {book ? (
                    <>
                        <h1 className='text-3xl font-bold'>{book.title}</h1>
                        <p className='text-white/60 mt-2'>{book.author}</p>
                        <p className='mt-6'>{book.description}</p>
                    </>
                ) : (
                    <p>Livre introuvable</p>
                )}
            </div>
        </>
    )
    
}