import { useContext } from "react"
import { StoreContext } from "../Providers/Provider"

export default function Show() {


const { movies, setMovies } = useContext(StoreContext)
  
// pour modifier un film
    const modifierFilm = (id) => {

        const filmMv = movies.find((movie) => movie.id === id)
        const nvFilm = prompt("Nouveau titre")

        filmMv.title = nvFilm
        
        setMovies([...movies])     
    }


     // pour supprimer un film
     const deletefilm = (id) => {
        const newMovies = movies.filter((movie) => movie.id !== id)
        setMovies(newMovies)
    }
    return (
        <div className="flex flex-wrap h-3">
            {movies.map((movie) => (
                <div className="p-12 mb-2">
                    <div className="bg-white shadow p-9 h-full">
                        <img className="rounded w-[640px] h-[360px] object-cover mb-6" src={movie.image} alt={movie.title} />
                        <div className="mb-8">
                            <h3 className="text-lg font-bold mb-3">{movie.title}</h3>
                            <span className="text-black font-bold text-base">{movie.category}</span>
                        </div>
                        <button className="bg-green-500 text-white font-bold py-2 px-4" onClick={() => modifierFilm(movie.id)}>Modifier</button>
                        <button className="bg-red-600 hover:bg-grey-700 text-white font-bold py-2 px-4 " onClick={() => deletefilm(movie.id)}>Delete</button>
                    </div>
                </div>
            ))}

        </div>
    )

}