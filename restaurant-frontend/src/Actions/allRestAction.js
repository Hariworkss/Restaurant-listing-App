//logic :- Api fetching ->  axios

import axios from "axios";
import { base_url } from "../Components/base_url";
import { FAIL,SUCCESS } from "../Constants/allrestConstants";


 //logic for updating state
 export const RestAction=()=>async(dispatch)=>{

    //api call
    try{
        const {data} = await axios.get(`${base_url}/restaurants`)
        console.log(data)
        dispatch({
            payload:data,
            type:SUCCESS
        })
    }
    catch(error){
        dispatch({
            payload:error,
            type:FAIL
        })
    }

    
 }