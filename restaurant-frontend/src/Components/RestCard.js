import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function RestCard({restaurants}) {
    console.log(restaurants)

  return (
    <div className='pt-5 ps-3 pe-3 pb-4'>
      <Link to={`/view/${restaurants.id}`} style={{textDecoration:'none',color:'black'}}>
      <Card style={{boxShadow:'2px 2px 10px 1px'} }>
      <Card.Img variant="top" src={restaurants.photograph} />
      <Card.Body>
        <Card.Title>{restaurants.name}</Card.Title>
        <Card.Text>
          {restaurants.neighborhood}
        </Card.Text>
      </Card.Body>
    </Card>
      </Link>
        
    </div>
  )
}

export default RestCard