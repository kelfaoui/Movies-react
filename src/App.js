import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { StoreContext, StoreProvider } from "./Providers/Provider"
import  Notfound from './Screens/AddMovies'
import MoviesScreen from './Screens/ShowMovies';
import { useContext } from 'react';



function App() {
  return (
    
    <StoreProvider>
      <BrowserRouter>
        <NAvbar />
        
        <Routes>
          <Route path='/movies' element={<MoviesScreen />}></Route>
          <Route path='/AddFilm' element={<Notfound />}></Route>
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}
  
function NAvbar () {
    
  return (
    <nav style={{backgroundColor:"purple", padding:"3vw"}}>
      <ul className="flex gap-5 bg-center align-content: center;">
        <li className="font-bold  px-200"><Link to="/movies">Voir tous les films</Link> </li>
        <li className="font-bold  px-200"><Link to="/AddFilm">Ajouter un film</Link> </li>

      </ul>

     
    </nav>
  )
}
  
export default App;
    
