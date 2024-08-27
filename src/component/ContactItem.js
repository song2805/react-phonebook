import React from 'react'
import {Row, Col} from 'react-bootstrap'


const ContactItem = ({item}) => {


  return (
   <Row className="main-contact-item"> 
    <Col lg={2}>
    <img width={80} style={{padding: '10px'}} src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg" />
    </Col>
    <Col lg={10}>
    <div>{item.name}</div>
    <div>{item.phoneNumber}</div>
    </Col>
   </Row>
  )
}

export default ContactItem
