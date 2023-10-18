import { connect } from "react-redux"
import Cards from "./Cards"


function Favorites(props){
    return(
        
        <>
    <div>
        <select name='' onChange="{handleOrderFilter}">
            <option selected disabled>
									Choose order
			</option>
            <option value='Ascendente'>Ascending</option>
            <option value='Descendente'>Descending</option>
        </select>
        <select name='' onChange="{handleOrderFilter}">
            <option selected disabled>
									Choose filter
			</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Genderless'>Genderless</option>
            <option value='unknown'>Unknown</option>
        </select>
    </div>
        <Cards characters= {props.myFavorites}></Cards>
    </>
    )

    
    
}
let mapStateToProps = (state) =>{
    return{myFavorites:state.myFavorites}
  }

  export default connect (mapStateToProps,null)(Favorites)