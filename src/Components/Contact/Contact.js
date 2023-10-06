import React, { useState } from 'react'
import MainHead from '../../Containers/MainHead/MainHead'
import './Contact.scss'
import { FloatingLabel, Form } from 'react-bootstrap'

function Contact() {
  let [state, setState] = useState({
    name: '',
    email: '',
    body: ''
  })
  const handleFloatingEmailChange = (e) => {
    setState({ ...state, email: e.target.value });
  }
  const handleFloatingTextChange = (e) => {
    setState({ ...state, body: e.target.value });
  }
  const handleFloatingNameChange = (e) => {
    setState({ ...state, name: e.target.value });
  }
  return (
    <div className="container-fluid contact-container">
      <MainHead content="Let's Talk!" classes="mt-3" />
      <p>
        I'd love to hear from you! Whether you have questions, ideas, or just want to say hello,
        don't hesitate to reach out. Your opinions and inquiries are vaulable for me and I am
        eager to hear from you and help with any inquiries, suggestions, or opportunities for collaboration
        that you may have. I will contact you as soon as I can after you complete the form below.
      </p>
      <Form>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Comments"
          className="mb-3"
        >
          <Form.Control as="textarea" placeholder="Leave a comment here" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea2" label="Comments">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: '100px' }}
          />
        </FloatingLabel>
      </Form>
    </div>
  )
}

export default Contact