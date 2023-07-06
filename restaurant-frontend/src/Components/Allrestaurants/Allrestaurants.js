import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import RestCard from '../RestCard'
import { base_url } from '../base_url'
import { RestAction } from '../../Actions/allRestAction'
import { useDispatch, useSelector} from 'react-redux'
import { allRestReducers } from '../../Reducers/allrestReducers'



function Allrestaurants() {
  // state for holding all restaurant array
  // const [allItems,setAllItems] = useState([])

  //dispatch import
  const dispatch = useDispatch()

  // code for api calls
  // const fetchData = async()=>{
  //   const response = await axios.get(`${base_url}/restaurants`)
  //   // console.log(response)
  //   // console.log(response.data)
  //   setAllItems(response.data)
  // }
  // console.log(allItems) //array [10]

    //redux response
  const {Allrestaurants}= useSelector(state=>state.allRestReducers)
  console.log(Allrestaurants); //array[10]

  // calling function using useEffect - ie a hook allowes to call function 
  useEffect(()=>{
    dispatch( RestAction())
  },[])

  return (
    <Row>
      {
        Allrestaurants.map(item=>(
          <Col sm={12} md={6} lg={4} xl={3}  >
            {/* destructuring */}
            <RestCard  restaurants={item} />
          </Col>
        ))
      }
    </Row>
  )
}

export default Allrestaurants