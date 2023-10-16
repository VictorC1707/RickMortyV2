import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default function Nav({onSearch, logout}){

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

    return(
        <nav
        class="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
        "
      >
       <div>
          <Link to="/home">
            <img className="w-48 " src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"></img>
          </Link>
        </div>
       
         <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            class="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
       
       <div class="hidden w-full md:flex md:items-center md:w-auto" id="menu">
          <ul
            class="
              pt-4 
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
              <button class="md:p-4 py-2 block hover:text-green-400" href="#"
                onClick={()=> onSearch(getRandomInt(826))}>Random</button>
            </li>
            <li>
              <button class="md:p-4 py-2 block hover:text-green-400" href="#"
                onClick={() => logout()}>Log Out</button>
            </li>
            <li>
              <Link class="md:p-4 py-2 block hover:text-green-400 " to="/about">About</Link>
            </li>
      
            <li>
              <SearchBar onSearch={onSearch}></SearchBar>
            </li>
          </ul>
        </div>
    </nav>
    )
}