import React from 'react';

import Acordeon from './Acordeon';

class FAQS extends React.Component {

  render(){
    return (
      <div className="container-fluid p-5 bg-white" id="FAQS">
        <div class="row justify-content-center mb-5">
          <div class="col-xs-12 col-md-8">
            <h2 class="text-center mb-5">FAQS</h2>
            <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.</p>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-xs-12 col-md-6">
            <Acordeon/>
          </div>
        </div>
      </div>
    );
  }
}

export default FAQS;