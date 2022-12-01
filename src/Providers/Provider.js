import { createContext, useEffect, useState } from "react";
import { getMovies } from "../Movie";

export const StoreContext = createContext()

export function StoreProvider(props) {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies().then((movies) => { setMovies(movies) })
 }, [])

// transfert de donnes du parent au fils via un provider 

    return (
        <StoreContext.Provider value={{
            movies: movies,
            count: movies.length,
            setMovies: setMovies
        }}>
            {props.children}
        </StoreContext.Provider>
    )

}