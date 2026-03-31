# 📚 Bookshop

Une petite app React pour consulter un catalogue de livres après s'être connecté. Le projet montre comment gérer une authentification avec token et récupérer des données depuis une API.

## 🎯 Le Projet

L'idée : se connecter avec ses identifiants, récupérer une liste de livres via une API, et les afficher. Rien de compliqué, mais ça couvre bien les bases d'une vraie application web.

## 🛠️ Stack

React, JavaScript, React Router, Vite, Tailwind CSS

## 🎨 Comment ça Fonctionne

### 1. L'Authentification

Dans `Login.jsx`, on capture l'email et le mot de passe :

```javascript
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

<input 
    type="text"
    className="bg-white text-black rounded-sm p-2 w-75 sm:w-55"
    onChange={(e) => setEmail(e.target.value)}
/>
<input 
    type="password"
    className="bg-white text-black rounded-sm p-2"
    onChange={(e) => setPassword(e.target.value)}
/>
```

Ensuite dans `App.jsx`, on envoie ces données à l'API :

```javascript
const handleConnexion = async (email, password) => {
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
    }
}
```

Si la connexion est réussie, on sauvegarde le token dans `localStorage` et on redirige vers la page d'accueil.

### 2. Récupération des Données avec le Token

Une fois connecté, on utilise ce token pour récupérer les livres :

```javascript
const goFetch = async () => {
    const response = await fetch('http://localhost:8000/api/books', {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });

    const results = await response.json();
    setBooks(results.member);
};

useEffect(() => {
    if (token) {
        goFetch();
    }
}, [token]);
```

Le token est envoyé dans le header `Authorization`. L'API vérifie qu'on est authentifiés et retourne les livres. Le `useEffect` déclenche automatiquement le fetch dès qu'on a un token.

### 3. Affichage des Livres

Dans `Books.jsx`, on boucle sur les livres et on les affiche :

```javascript
{books && books.length > 0 ? (
    books.map((book) => (
        <div 
            className='bg-slate-800/60 p-5 rounded-xl shadow-md hover:bg-slate-800/90 duration-150'
            key={book.id}>
            <Link to={`/book/${book.id}`}> 
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
```

On utilise `map()` pour transformer chaque livre en un élément cliquable.

### 4. Routage

Dans `App.jsx`, on définit les 4 routes principales :

```javascript
<Routes>
    <Route path="/" element={<Login handleConnexion={handleConnexion} success={success}/>}/>
    <Route path="/home" element={<Home books={books}/>}/>
    <Route path="/books" element={<Books books={books} token={token}/>}/>
    <Route path="/book/:id" element={<Book token={token} />}/>
</Routes>
```

## 💡 Compétences Démontrées

- ✅ Appels API avec authentification par token
- ✅ Gestion d'état avec React (useState, useEffect)
- ✅ Stockage persistant avec localStorage
- ✅ Routage avec React Router
- ✅ Manipulation de données et rendu dynamique
- ✅ Gestion d'erreurs

## 🚀 Comment l'Utiliser

```bash
git clone https://github.com/im-tomasz/Bookshop.git
cd Bookshop
npm install
npm run dev
```

Ouvrez `http://localhost:5173` et connectez-vous !

## 📁 Structure

```
src/
├── App.jsx          # Routage et logique API
├── Login.jsx        # Page de connexion
├── Home.jsx         # Page d'accueil
├── Books.jsx        # Liste des livres
├── Book.jsx         # Détails d'un livre
└── main.jsx         # Point d'entrée
```

---

**Créé par** : [im-tomasz](https://github.com/im-tomasz)