import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from './component/ContactForm';
import ContactLists from './component/ContactLists'

function App() {
  return (
    <div >
      <h1 style={{textAlign: 'center'}}>Phone Book</h1>
      <Container>
        <Row>
          <Col>
          <ContactForm/>
          </Col>
          <Col>
          <ContactLists/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
