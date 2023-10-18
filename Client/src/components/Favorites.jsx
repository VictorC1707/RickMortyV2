import { connect, useDispatch } from "react-redux"
import { orderCards, filterCards, resetFilters } from "../redux/actions"
import Cards from "./Cards"


function Favorites(props){
    let dispatch = useDispatch()

    let handleOrderFilter = (event) => {
		if (
			event.target.value === 'Ascendente' ||
			event.target.value === 'Descendente'
		) {
			dispatch(orderCards(event.target.value));
		} else {
			dispatch(filterCards(event.target.value));
		}}

     let handleResetFilters = () =>{
        dispatch(resetFilters())
     }
    return(
    
        <>
        <div className=" mt-4 flex justify-center">

    <div className="flex justify-around w-3/5">
    <div>
    <label for="small" class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Order</label>
        <select name='' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleOrderFilter}>
            <option selected disabled>
									Choose order
			</option>
            <option value='Ascendente'>Ascending</option>
            <option value='Descendente'>Descending</option>
        </select>
    </div>

    <div>
    <label for="small" class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Filter</label>
        <select name='' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleOrderFilter}>
            <option selected disabled>
									Choose filter
			</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Genderless'>Genderless</option>
            <option value='unknown'>Unknown</option>
        </select>

    </div>

    <div>
    <label for="small" class="mb-2 text-sm font-medium text-gray-900 dark:text-white">All Characters</label>
        <button className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:ring-blue-500 hover:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:hover:ring-blue-500 dark:hover:border-blue-500" onClick={handleResetFilters}>Reset</button>
    </div>
    </div>
        </div>
        <Cards characters= {props.myFavorites}></Cards>
    </>
    )

    
    
}
let mapStateToProps = (state) =>{
    return{myFavorites:state.myFavorites}
  }

  export default connect (mapStateToProps,null)(Favorites)