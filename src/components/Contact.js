import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="section-heading">Let's Get In Touch!</h2>
            <hr className="my-4" />
            <p className="mb-5">Ready to start your next project with us? That's great! Give us a call or send us an email and we will get back to you as soon as possible!</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 mx-auto text-center">
            <i className="fas fa-envelope fa-3x mb-3 sr-contact"></i>
            <p>
              <a href="mailto:your-email@your-domain.com">feedback@startbootstrap.com</a>
            </p>
          </div>
          <div className="col-lg-4 mx-auto text-center">
            <i className="fab fa-facebook-f fa-3x mb-3 sr-contact"></i>
            <p>Facebook</p>
          </div>
          <div className="col-lg-4 mx-auto text-center">
            <i className="fab fa-twitter fa-3x mb-3 sr-contact"></i>
            <p>Twitter</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;