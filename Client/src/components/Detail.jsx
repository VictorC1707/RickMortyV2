import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import "./Detail.css"
import { Link } from "react-router-dom"

export default function Detail(){
    const {detailId} = useParams()
    let [character,setCharacter] = useState({})

    let statusc = ""
    let symbol =""
  

useEffect(() => {
  fetch(`http://localhost:3001/rickandmorty/character/${id}`)
    .then((response) => response.json())
    .then((char) => {
      if (char.name) {
        setCharacter(char);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    })
    .catch((err) => {
      window.alert("No hay personajes con ese ID");
    });
  return setCharacter({});
}, [detailId]);

if(character.status == "Alive"){
    statusc = "text-green-400 text-sm mb-8"
    symbol = "fa-regular fa-heart"
  }else if(character.status == "Dead") {
    statusc = "text-red-400 text-sm mb-8"
    symbol = "fa-solid fa-skull"
  } else {
    statusc = "text-yellow-400 text-sm mb-8"
    symbol = "fa-solid fa-question"
  }

    return(
        <div>
        <div class=" py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
                <div class="column gold h-[400px] rounded-lg bg-gray-300 mb-4">
                    <img class="w-full h-full object-cover" src={character.image} alt="Character Image"/>
                </div>
            </div>
            <div class="md:flex-1 flex items-center justify-center px-4">
            <div className="">

                <h2 class="text-2xl text-white font-bold mb-2">{character.name}</h2>
                <p class={statusc}>{character.status} <i class={symbol}></i></p>
                <div class="flex justify-between mb-6">
                    <div class="mr-4 mx-2">
                        <span class="border border-pink-600 rounded-full px-4 text-sm text-pink-600 py-0.5">Gender</span>
                        <span class="text-gray-600"> {character.gender}</span>
                    </div>
                    <div class="mr-4 mx-2">
                        <span class="border border-blue-600 rounded-full px-4 text-sm text-blue-600 py-0.5">Origin</span>
                        <span class="text-gray-600"> {character.origin?.name}</span>
                    </div>
                </div>
                <div class="flex justify-between mb-14">
                    <div class="mr-4 mx-2" >
                        <span class="border border-orange-600 rounded-full px-4 text-sm text-orange-600 py-0.5">Species</span>
                        <span class="text-gray-600"> {character.species}</span>
                    </div>
                    <div class="mr-4 mx-2">
                        <span class="border border-yellow-600 rounded-full px-4 text-sm text-yellow-600 py-0.5">Location</span>
                        <span class="text-gray-600"> {character.location?.name}</span>
                    </div>
                </div>
                <Link to="/home" class="mt-10 bg-gradient-to-r from-green-400 to-yellow-500 hover:from-yellow-500 hover:to-green-600 font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-1500 ease-in-out  hover:animate-pulse active:animate-bounce">
  Go Home
</Link>
            </div>
            </div>
        </div>

    </div>
</div>
        </div>

    )
}
