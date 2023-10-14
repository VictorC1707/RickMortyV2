import "./SearchBar.css"

export default function SearchBar(props) {
   return (
      
      
  <div class="relative p-12 w-full sm:max-w-2xl sm:mx-auto">
    <div class="overflow-hidden z-0 rounded-full relative p-3">
      <form role="form" class="relative flex z-50 bg-transparent rounded-full">
        <input type="input" placeholder="enter your search here" class="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none"/>
        <button onClick={props.onSearch} class="bg-indigo-500 text-white rounded-full font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none">Search</button>
      </form>
      <div class="glow glow-1 z-10 bg-green-300 absolute"></div>
      <div class="glow glow-2 z-20 bg-green-400 absolute"></div>
      <div class="glow glow-3 z-30 bg-green-800 absolute"></div>
      <div class="glow glow-4 z-40 bg-green-600 absolute"></div>
    </div>
  </div>
   );
}
