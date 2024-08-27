import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

//function ContactForm() 
const ContactForm = () => {

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(0);
  const dispatch = useDispatch()

  // const getName = (event) => {
  //   setName(event.target.value)
  // }
  // const getPhoneNumber = (event) => {
  //   setPhoneNumber(event.target.value)
  // }
  //Redux 에서 onSubmit 을 사용하면 refresh가 반복 작동한다. 이것을 막는 것이 event.preventDefault(); 함수이다.
  const addInfo = (event) => {
    event.preventDefault();
    dispatch({type: "ADD_INFO", payload: {name : name, phoneNumber: phoneNumber}})
  }

  return (
    <div>




      <Form onSubmit={addInfo}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Add the Name" onChange={(event)=>{setName(event.target.value)}} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="Add the Phone Number" onChange={(event)=>{setPhoneNumber(event.target.value)} }/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>

    </div>
  )
}

export default ContactForm
