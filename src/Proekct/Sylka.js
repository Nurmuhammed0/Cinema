import React, { useState, useEffect, } from 'react'
import { useParams } from 'react-router-dom'
import Cards from '../Cards'
import axios from 'axios';

export default function Sylka() {
  let { id } = useParams();
  const [dog, setDog] = useState([])

  useEffect(() => {
    console.log(id)
    const f = axios.get(`https://api.themoviedb.org/3/discover/tv?with_genres=${id}&api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`);
    f.then((e) => {
      console.log(e)
      setDog(e.data.results)
    })
  }, [id])



  return (
    <div>
      <Cards name={dog} />
    </div>

  )
}
