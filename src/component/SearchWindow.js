import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'


const SearchWindow = () => {

  const [keyword, setKeyword]= useState('')
  const dispatch = useDispatch();
const searchByName=(event)=>{
  event.preventDefault();
  dispatch({type: "SEARCH_BY_NAME", payload: { keyword}})

}

  return (
    <Form className="search-window" onSubmit={searchByName} style={{display: 'flex'}}>
      <Row>
        <Col lg={10}>
          <Form.Control type="text" placeholder="Add the Name" onChange={(event) => setKeyword(event.target.value)} />
        </Col>
        <Col lg={2}>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchWindow
