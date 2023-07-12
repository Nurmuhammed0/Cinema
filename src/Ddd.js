import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ReactStars from 'react-stars'

export default function Detailed(props) {
  let { id } = useParams();
  const [add, setAdd] = useState([])

  useEffect(() => {
    console.log(id)
    const f = axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`);
    f.then((s) => { console.log(s); setAdd(s.data) })
  }, [id])
  return (
    <Row>
      <Col>
        <Card>
          <div style={{ position: 'relative', }}>
            <Card.Img style={{ width: '100%', height: '600px' }}
              src={`https://image.tmdb.org/t/p/w500/${add.backdrop_path}`} />
            <Card.Img style={{
              width: '25%', position: 'absolute',
              bottom: '-5%', left: '20px'
            }}
              src={`https://image.tmdb.org/t/p/w500/${add.poster_path}`} />
            <div style={{ position: 'absolute', left: '30%', bottom: '5%', fontSize: '50px', fontWeight: 'bold', color: '#fff' }}>
              {add.name}
              <div style={{ fontSize: '25px' }}>{add.tagline}</div>
            </div>
          </div>
          <Card.Body>
            <div className='d-flex justify-content-center mt-2' >
              {add.genres && add.genres.map((e) => {
                return (
                  <div style={{ fontSize: '25px', fontWeight: 'bold' }} key={e.id}>{e.name},</div>
                )
              })}
            </div>
            <ReactStars
          count={10}
        size={30}
      value	={add.vote_average}
        color2={'#ffd700'} />
            <Card.Text style={{ fontSize: '20px', marginTop: '20px' }}>{add.overview}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}
