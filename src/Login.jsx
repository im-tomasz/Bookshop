import { useState } from "react"

export function Login({handleConnexion, success}) {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')


    return (
        <>
            <div className="h-150 w-full sm:h-120 sm:w-80 border border-white/20 bg-white/5 rounded-lg flex flex-col justify-center items-center">
                <div className="flex flex-col gap-6 pb-10  rounded-md">
                    <div className="text-5xl sm:text-2xl">
                        <h3 className="font-bold text-center">
                            Connexion
                        </h3>
                    </div>
                    <div className="hover:scale-102 transition duration-300 flex flex-col gap-2 p-4 rounded-md border border-white/20 bg-white/2 backdrop-blur-xl">
                        <span className="text-white">
                            email
                        </span>
                        <input 
                            type="text"
                            className="bg-white text-black rounded-sm p-2 w-75 sm:w-55"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="hover:scale-102 transition duration-300 flex flex-col gap-2 p-4 rounded-md border border-white/20 bg-white/2 backdrop-blur-xl">
                        <span className="text-white">
                            mot de passe
                        </span>
                        <input 
                            type="password"
                            className="bg-white text-black rounded-sm p-2"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="text-center ">
                        {success &&
                            <span className="text-red-300 text-center text-sm">
                                {success}
                            </span>
                        }
                    </div>
                </div>
                <button 
                    className="flex items-center justify-center h-18 sm:h-12 w-40 sm:w-35 text-2xl sm:text-base border rounded-lg border-white/30 bg-white/10 hover:bg-white/20 font-semibold active:bg-white/30 active:scale-99 transition duration-150"
                    onClick={() => handleConnexion(email, password)}
                    >connexion
                </button>
            </div>
        </>
    )

}