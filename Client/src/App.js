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
import Swal from "sweetalert2"

function App () {
  const [characters, setCharacters] = useState([])

  function sucessLogin(){
    Swal.fire(
      'Good job!',
      'Login success!',
      'success'
    )
  }

  function errorLogin(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!'
    })
  }
  
  
  {/*fetch(`https://rickandmortyapi.com/api/character/${character}`)*/}

 function onSearch(id){
  let present= characters.find(char => char.id == id)
  if(present){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Repeated character!'
    })
  }  else{

    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
        .then((response) => response.json())
        .then((data) => {
           if (data.name) {
              setCharacters((oldChars) => [...oldChars, data]);
           } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'There are no characters with that id!'
            })
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
  Swal.fire({
    title: 'Are you sure?',
    text: "You are logging out!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, log out!'
  }).then((result) => {
    if (result.isConfirmed) {
      setAccess(false);
      navigate('/');
      Swal.fire(
        'Closed session!',
        'Session closed successfully.',
        'success'
      )
    }
  })
  
}
function login(userData) {
   if (userData.password === password && userData.email === email) {
    sucessLogin()
      setAccess(true);
      navigate('/home');
   }else{

     errorLogin()
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
