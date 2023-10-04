import React, { useState } from 'react'
import MainHead from '../../Containers/MainHead/MainHead'
import './Contact.scss'

function Contact() {
  let [state, setState] = useState({
    name: '',
    email: '',
    body: ''
  })
  return (
    <div className="container-fluid contact-container">
      <MainHead content="Let's Talk!" classes="mt-3" />
      <p>
        I'd love to hear from you! Whether you have questions, ideas, or just want to say hello,
        don't hesitate to reach out. Your opinions and inquiries are vaulable for me and I am
        eager to hear from you and help with any inquiries, suggestions, or opportunities for collaboration
        that you may have. I will contact you as soon as I can after you complete the form below.
      </p>
      <form class="row g-3 mt-4 mx-auto col-md-6">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInputName" placeholder="Please enter your name here" value={state.name} />
            <label for="floatingInputName">Name</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInputEmail" placeholder="Please enter your email address" value={state.email} />
            <label for="floatingInputEmail">Email</label>
        </div>
        <div class="form-floating mb-3">
          <textarea type="text" class="form-control" id="floatingInputText" rows="4" placeholder="Please enter your text here"  />
            <label for="floatingInputText">Queries/Suggestions</label>
        </div>
      </form>
    </div>
  )
}

export default Contact