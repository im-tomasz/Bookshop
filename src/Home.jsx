import { LibraryBig } from "lucide-react";
import { Link } from "react-router-dom";

export function Home({books}) {

    return (
        <>
            <article className="flex items-center flex-col space-y-10">
                <div>
                    <h1 className="text-white text-5xl">Bienvenue sur le Bookshop</h1>
                </div>
                <div className="">
                    <Link to="/books" >  
                        <button 
                            className="flex border rounded-sm p-2 bg-slate-900 border-white/20 hover:bg-white/20 hover:scale-102 transition duration-150 group active:bg-white/30">
                            <LibraryBig className="group-active:scale-115 transition duration-150"/>
                            voir tous les livres
                        </button>
                    </Link>
                </div>
            </article>
        </>
    )
}