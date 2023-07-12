import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from '../Cards'
import { Row,Col } from 'react-bootstrap'
export default function Film() {
const[movie,setMovie]=useState([])
 useEffect(()=>{
   axios.get('https://api.themoviedb.org/3/tv/popular?page=1&api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU').then((s)=>{console.log(s)
   setMovie(s.data.results)})
 },[])
  return (
    <div>
      <Row>
      <Col>
          <Cards name={movie}/>
      </Col>
      </Row>
    </div>
  )
}

