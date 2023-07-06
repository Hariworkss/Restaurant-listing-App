import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { base_url } from './base_url'
import axios from 'axios'
import { Col, Row , Image } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import RestOp from './RestOp'
import RestReview from './RestReview'





function ViewRestaurant() {

  const[RestDetails,setRestDetails]=useState({})

  // destructuring
  const {id} = useParams()  //taking id from useParams using destructuring  -- id is the paramter passed from card inside <link> eg:-  <Link to={`/view/${restaurants.id}`}
  console.log(id) //path params has id  param passes from corresposnding card 
  // api call for fetch particular restaurant details
  const fetchData = async()=>{
    const {data} = await axios.get(`${base_url}/restaurants/${id}`)
    // console.log(data)
    setRestDetails(data)  //setting  data to RestDetails
  }
  console.log(RestDetails)
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div>
      {
        RestDetails?
      <Row>
      <Col sm={12} md={3}>
      <Image className='border rounded p-2 ms-3' src={`${RestDetails?.photograph}`} fluid/>  {/**fluid aligns image */}
      </Col>
      <Col md={8}>
      <h2>{RestDetails?.name}</h2>
      <h5>{RestDetails?.neighborhood}</h5>
      <ListGroup>
    <ListGroup.Item>{RestDetails?.cuisine_type}</ListGroup.Item>
    <ListGroup.Item><RestOp op={RestDetails?.operating_hours}/></ListGroup.Item>
    <ListGroup.Item><RestReview review={RestDetails?.reviews} /></ListGroup.Item>
  </ListGroup>
      </Col>
    </Row>:''
      }

    </div>
  )
}

export default ViewRestaurant