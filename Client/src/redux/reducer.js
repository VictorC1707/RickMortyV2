import {ADD_FAVORITE, REMOVE_FAVORITE, ORDER, FILTER, RESET_FILTERS} from "./actions"

const initialState = {
    myFavorites:[],
    allCharacters: []
}

const reducer = (state=initialState,action) =>{
    switch(action.type){
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                allCharacters: [...state.allCharacters, action.payload]

            }
        case REMOVE_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(character =>
                    character.id !== action.payload
                ),
            }
        
        case FILTER:
            let copyAllCharactersFilter = [...state.allCharacters]
            return {
                ...state,
                myFavorites: copyAllCharactersFilter.filter(character => character.gender === action.payload)
            }
        case ORDER:
            let copyAllCharactersOrder = [...state.allCharacters]
            if (action.payload === 'Ascendente') {
				return {
					...state,
					myFavorites: copyAllCharactersOrder.sort(
						(characterA, characterB) => characterA.id - characterB.id,
					),
				};
			} else if (action.payload === 'Descendente') {
				return {
					...state,
					myFavorites: copyAllCharactersOrder.sort(
						(characterA, characterB) => characterB.id - characterA.id,
					),
				};
			} else {
				break;
			}

            case RESET_FILTERS:
                return {
                  ...state,
                  myFavorites: state.allCharacters
                };
            
        default:
            return { ...state}
    }
}

export default reducer 