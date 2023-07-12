import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from '../Cards'
import { Row, Col } from 'react-bootstrap'
export default function Serial() {
  const [serial, setSerial] = useState([])

  useEffect(() => {
    const a = axios.get(' https://api.themoviedb.org/3/tv/popular?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru');
    a.then((m) => { console.log(m); setSerial(m.data.results) })
  }, [])
  return (
    <div>
      <Row>
        <Col>
          <div>
            {console.log(serial, 'suds')}
            <Cards name={serial} />
          </div>
        </Col>
      </Row>
    </div>

  )
}
