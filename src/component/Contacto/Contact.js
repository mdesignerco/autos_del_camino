import React from 'react';
import Form from './Form';

class Contact extends React.Component {

  render(){
    return (
      <div className="container p-5" id="contacto">
        <div class="row justify-content-center mb-3">
          <div class="col-xs-12 col-md-8  ">
            <h2>Contacto</h2>
          </div>
        </div>
        <div class="row justify-content-center ">
          <div class="col-xs-12 col-md-8 ">
            <Form/>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;