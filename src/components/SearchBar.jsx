import "./SearchBar.css"
import { useState } from "react";

export default function SearchBar({onSearch}) {
  const [character,setCharacter] = useState('')
  const handleChange =(event) => {
    setCharacter(event.target.value);
    event.preventDefault();
  }
   return (
      
      
  <div class="relative w-full sm:max-w-2xl sm:mx-auto">
    <div class="overflow-hidden z-0 rounded-full relative p-3">
      <div class="relative flex z-50 bg-transparent rounded-full">
        <input type="input" value={character} onChange={handleChange} placeholder="Enter your search here" class="rounded-full flex-1 px-6 py-2 text-gray-700 focus:outline-none"/>
        <button onClick={()=> onSearch(character)} class="bg-indigo-500 text-white rounded-full font-semibold px-8 py-2 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none">Search</button>
      </div>
      <div class="glow glow-1 z-10 bg-green-300 absolute"></div>
      <div class="glow glow-2 z-20 bg-green-400 absolute"></div>
      <div class="glow glow-3 z-30 bg-green-800 absolute"></div>
      <div class="glow glow-4 z-40 bg-green-600 absolute"></div>
    </div>
  </div>
   );
}
