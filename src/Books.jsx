import { LoaderCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Books({books}) {

    return (
        <>
            <div className='space-y-10 mt-10'>
                <div>
                    <h1 className='text-3xl text-center'>books page</h1>
                </div>
                <div className='space-y-10 bg-slate-900 p-20 rounded-xl'>
                    {books && books.length > 0 ? (
                        books.map((book) => (
                            
                            <div 
                                className='bg-slate-800/60 p-5 rounded-xl shadow-md hover:bg-slate-800/90 duration-150'
                                key={book.id}>
                                <Link
                                    to={`/book/${book.id}`}>
                                    <p className='text-lg font-bold'>
                                        {book.title}
                                    </p>
                                
                                    <p className='text-white/60'>
                                        {book.author}
                                    </p>
                                </Link>
                            </div>
                            
                        ))
                    ) : (
                        <p>Aucun livre disponible</p>
                    )}
                </div>
            </div>
        </>
    )
}