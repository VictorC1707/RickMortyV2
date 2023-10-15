import './App.css'
import Cards from './components/Cards.jsx'
import { useEffect, useState } from 'react'
import Nav from './components/Nav'

function App () {
  const [characters, setCharacters] = useState([])
  
  {/*const example = {
    name: 'Morty Smith',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
 };*/}

 function onSearch(character){
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
 }
  
  return (
    
    <div className='App'>
    <Nav onSearch={onSearch}></Nav>
      <hr />
      <div>
        <Cards
          characters={characters}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div>
      <hr />
    </div>
  )
}

export default App
