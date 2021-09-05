import React, {useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

const Movieadd = ({handleClose,show,addMovie}) => {
    const [newmovie, setNewmovie]= useState({Poster: " ", Title: " ", Year: " ", Rating: " "})
    const handleChange=(e)=>{setNewmovie({...newmovie,[e.target.name]:e.target.value})}
    return (
        <div>
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control type="email" placeholder="movie 's title" name="Title" onChange={handleChange} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Poster</Form.Label>
    <Form.Control type="password" placeholder="movie's poster" name="Poster" onChange={handleChange} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Year</Form.Label>
    <Form.Control type="email" placeholder="movie 's year" name="Year" onChange={handleChange} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Rating</Form.Label>
    <Form.Control type="email" placeholder="movie 's rating" name="Rating" onChange={handleChange} />
  </Form.Group>
</Form>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{addMovie(newmovie);handleClose()}}>
            Add movie
          </Button>
        </Modal.Footer>
      </Modal>   
            
        </div>
    )
}

export default Movieadd
