// import Allrestaurants from "../Components/Allrestaurants/Allrestaurants";
import { FAIL,SUCCESS } from "../Constants/allrestConstants";


export const allRestReducers = (state={Allrestaurants:[]},action)=>{
    switch(action.type){
        case SUCCESS:
            return{
                Allrestaurants:action.payload
            }
        case FAIL:
            return{
                Allrestaurants:[]
            }    
        default:
            return state     
            
    }
}
        