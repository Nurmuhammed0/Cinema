import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import Cards from "../Cards";

function Home() {

  const [name, setName] = useState([])
  const [tv, setTv] = useState('tv1')

  const [btn, setBtn] = useState([])
  const [day, setDay] = useState('day1')

  useEffect(() => {
    if (tv === 'tv1') {
      const a = axios.get(' https://api.themoviedb.org/3/tv/popular?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru')
      a.then((s) => {
        console.log(s)
        setName(s.data.results)
      })
    } else {
      const b = axios.get(' https://api.themoviedb.org/3/movie/popular?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU')
      b.then((c) => {
        console.log(c)
        setName(c.data.results)
      })
    }
  }, [tv])

  useEffect(() => {
    if (day === 'day1') {
      const l = axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU')
      l.then((g) => {
        console.log(g)
        setBtn(g.data.results)
      })
    } else {
      const k = axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU')
      k.then((j) => {
        console.log(j)
        setBtn(j.data.results)
      })
    }
  }, [day])
  return (
    <div>
      <Row>
        <Col>
          <div className="btn-group mt-2" role="group" aria-label="Basic example">
            <Button variant={tv === 'tv1' ? 'primary' : 'dark'} onClick={() => setTv('tv1')}>По ТВ</Button>
            <Button variant={tv !== 'tv1' ? 'primary' : 'dark'} onClick={() => setTv('tv2')}>В кинотеатрах</Button>
          </div>
          <Cards name={name} />

          <div className="btn-group" role="group" aria-label="Basic example">
            <Button variant={day === 'day1' ? 'primary' : 'dark'} onClick={() => setDay('day1')}>Сегодня</Button>
            <Button variant={day !== 'day1' ? 'primary' : 'dark'} onClick={() => setDay('day2')}>На этой неделе</Button>
          </div>
          <Cards name={btn} />
          </Col>
      </Row>
    </div>
  );
}
export default Home;