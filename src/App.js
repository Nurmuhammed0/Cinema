import './App.css';
import Navbar1 from './Proekct/Navbar1';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Proekct/Home';
import Film from './Proekct/Film';
import Serial from './Proekct/Serial';
import People from './Proekct/People';
import { Container,} from 'react-bootstrap';
import Sylka from './Proekct/Sylka';
import Janr from './Proekct/Janr';
import Cards from './Cards';
import Detailed from './Proekct/Detailed';
function App() {
  return (
    <div>
      <Router>
        <Navbar1 />
        <Container >
          <div className='d-flex m-2'>
            <Routes>
              <Route path='/serial' element={<Serial />} />
              <Route path='/people' element={<People />} />
              <Route path='/Film' element={<Film />} />
              <Route path='/janrTV/:id' element={<Sylka />} />
              <Route path='/janrs/:id' element={<Janr/>} />
              <Route path='/cards' element={<Cards/>}/>
              <Route path='/surot/:id' element={<Detailed/>}/>

              <Route path='/' element={<Home />} />
            </Routes>
          </div>
        </Container>
      </Router>

    </div>
  );
}

export default App;
