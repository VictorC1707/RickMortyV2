export const ADD_FAVORITE = "ADD_FAVORITE"
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"
export const ORDER = "ORDER"
export const FILTER = "FILTER"
export const RESET_FILTERS ="RESET_FILTERS"
import axios from "axios"

export function addFavorite(character) {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return (dispatch) => {
      axios.post(endpoint, character).then(({ data }) => {
         return dispatch({
            type: 'ADD_FAV',
            payload: data,
         });
      });
   };
}

export function removeFavorite(id){
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   return (dispatch) => {
      axios.delete(endpoint).then(({ data }) => {
         return dispatch({
            type: 'REMOVE_FAV',
            payload: data,
      });
      });
   };
}

export function filterCards(status){
    return {
        type:FILTER, payload: status
    }
}

export function orderCards(id){
    return{
        type:ORDER, payload:id
    }
}

export function resetFilters() {
    return {type: RESET_FILTERS}
}