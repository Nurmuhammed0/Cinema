import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link,} from 'react-router-dom'
// import { Card, NavDropdown } from 'react-bootstrap'
export default function Tibi() {
  const [janrs, setJanrs] = useState([])
 
  
  
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`).then((ss) => {
      console.log(ss);
      setJanrs(ss.data.genres)
    })
  }, [])

  return (
    <div style={{ marginLeft: '20px', color: '#fff' }}>
      {janrs.map((n) => {
        return (
          
          <Link to={`/janrs/${n.id}`}>
            <div style={{ width: "250px", border: 'solid 1px grey', fontSize: "20px",color:'#fff' }}>{n.name}</div>
          </Link>
          
        )
      })}

    </div>
  )
}
