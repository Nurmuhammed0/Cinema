import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Card,Row,Col} from 'react-bootstrap'
export default function People() {

  const[movie,setMovie]=useState([])
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/person/popular?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`)
    .then(e=>setMovie(e.data.results))
  },[])
  console.log(movie);
  return (<div className='d-flex'>
    <Row>
        {movie.map((item) =>(
          <Col md={3}>
           <Card>
        <>
        <Card.Img variant="top"  src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}/>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
        </Card.Body>
        </>
        </Card>
        </Col>
        ))}
    </Row>
  </div>
  )
}
