import { Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Tibi from './Proekct/Tibi'
export default function Cards(props) {
  return (
    <Row>
      <Col>
            <div>
              <Row>
                {props.name.map(m => (
                  <Col md={3} >
                    <Card as={Link} to={`/surot/${m.id}`} className='mt-4' style={{ height: '300px' }} >
                      <Card.Img variant="top" style={{ height: '250px' }} src={`https://image.tmdb.org/t/p/w500/${m.backdrop_path}`} />
                      <Card.Body>
                        <Card.Title>{m.name || m.title}</Card.Title>
                        <Card.Text>{m.first_air_date}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>

      </Col>
      <Col md={2}>
        <Tibi />
      </Col>
    </Row>
  )
}

