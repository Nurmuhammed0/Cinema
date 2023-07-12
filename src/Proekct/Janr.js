import Cards from '../Cards';
import { useParams } from 'react-router-dom'
import { useState, useEffect} from 'react';
import axios from 'axios';
export default function Janr() {
  let { id } = useParams();
  const [tibi, setTibi] = useState([])

  useEffect(()=>{
    console.log(id)
      const g =axios.get( `https://api.themoviedb.org/3/discover/ ?with_genres=${id}&api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`);
      g.then((b)=>{
          console.log(b)
          setTibi(b.data.results)
      }) 
  }, [id] )
  return (
    <div>
     <Cards name={tibi}/>
    </div>
  )
}
