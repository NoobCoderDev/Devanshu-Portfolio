import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import './Contact.css'

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="container">
        <div className='mt-3'>
            <h3>Contact me</h3>
            <p>Fill out the form below to contact me.</p>
        </div>
      <div className="row justify-content-center mb-3">
        <div className="col-md-6 ">
          <div className="card mt-5 bg-secondary-subtle shadow">
            <div className="card-body">
              <h3 className="card-title">Send Your Message</h3>
              <form>
              <div className="mb-3">
                  <label htmlFor="name" className="form-label mb-0">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder='Enter Your Full Name'
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label mb-0">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder='Enter Your Email Address'
                    required
                  />
                </div>
                <div className="mb-3 d-flex-none">
                  <label htmlFor="description" className="form-label mb-0">Description</label>
                  <textarea className='' contentEditable placeholder='Type your message here...' id='description'></textarea>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </>
  )
}
