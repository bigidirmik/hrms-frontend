import {favoriteInitials} from "../initialValues/favoriteInitials"
import {ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES} from "../actions/favoriteActions"

const initialState = {
    favoriteInitials:favoriteInitials
}

export default function favoriteReducer(state=initialState,{type,payload}){
    switch (type) {
        case ADD_TO_FAVORITES:
            let jobAdvertisement = state.favoriteInitials.find(f=>f.jobAdvertisement.id===payload.id)
            if (jobAdvertisement) {
                return{
                    ...state
                }
            } else {
                return{
                    ...state,
                    favoriteInitials:[...state.favoriteInitials,{jobAdvertisement:payload}]
                }
            }
            case REMOVE_FROM_FAVORITES:
                return{
                    ...state,
                    favoriteInitials:state.favoriteInitials.filter(f=>f.jobAdvertisement.id!==payload.id)
                }
        default:
            return state;
    }
}