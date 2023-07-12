import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Navbar,Container,Nav,NavDropdown,Image} from 'react-bootstrap';
import {Link}from 'react-router-dom'
function Navbar1() {
  const[janr,setJanr]=useState([])
  useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/genre/tv/list?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU').then((s)=>{console.log(s); 
    setJanr(s.data.genres)})
  },[])

  return(
    <div>
      <Navbar bg="dark" variant="danger" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Image width={'200px'} src='https://cinematica.kg/99c13a566f8363476f14db5420aaee6b.png'/>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Главная</Nav.Link>
              <Nav.Link as={Link} to='/Film'>Фильмы</Nav.Link>
              <Nav.Link as={Link} to='/serial'>Сериалы</Nav.Link>
              <Nav.Link as={Link} to='/people'>Люди</Nav.Link>
              <NavDropdown title="Жанры TV">
                {janr.map((s)=>{
                  return(
                    <NavDropdown.Item  as={Link} to={`/janrTV/${s.id}`} key={s.id}>{s.name}</NavDropdown.Item>
                  )
                })
                  
                }
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar1;