import './App.css'
import Cards from './components/Cards.jsx'
import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import About from './components/About'
import Detail from './components/Detail'
import NotFound from './components/404'
import Form from './components/Form'
import ParticlesComponent from './components/Particles'
import Favorites from './components/Favorites'

function App () {
  const [characters, setCharacters] = useState([])
  
  {/*fetch(`https://rickandmortyapi.com/api/character/${character}`)*/}

 function onSearch(character){
  let present= characters.find(char => char.id == character)
  if(present){
    window.alert('Personaje Repetido');
  }  else{

    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
        .then((response) => response.json())
        .then((data) => {
           if (data.name) {
              setCharacters((oldChars) => [...oldChars, data]);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
  }
 }

  function onClose(id) {
    setCharacters(characters.filter(char => char.id !== id))
  }
const location = useLocation();
const navigate = useNavigate();
const [access, setAccess] = useState(false);
const email = 'ejemplo@gmail.com';
const password = '1password';


function logout() {
  
     setAccess(false);
     navigate('/');
}
function login(userData) {
   if (userData.password === password && userData.email === email) {
      setAccess(true);
      navigate('/home');
   }
}

useEffect(() => {
   !access && navigate('/');
}, [access]);

  
  return (<>

    <ParticlesComponent/>
    <div className='App z-10 relative'>
    {location.pathname !=='/'  && <Nav onSearch = {onSearch} logout ={logout}/>}
      <hr />
      <div>
      <Routes>
      <Route path='/home' element={<Cards
          characters={characters}
          onClose={onClose}
        />}> </Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path='/detail/:detailId' element={<Detail/>}></Route>
       <Route path="/" element={<Form login={login}></Form>}></Route>
       <Route path="/favorites" element={<Favorites
       characters={characters}
          onClose={onClose}></Favorites>}></Route>
       <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      </div>
    </div>
  </>
    
  )
}

export default App
