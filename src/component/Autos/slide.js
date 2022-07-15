import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';



class slide extends React.Component {
  
  render(){
    const images = [
      "https://images.unsplash.com/photo-1587735420291-4672e790db42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=663&q=80",
      "https://images.unsplash.com/photo-1606073283426-5d6b07b86f53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1597677263568-4f477bc6ed91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    ];

    return (
      <Slide
        autoplay={true}
        slidesToShow={1}
      >
      <div id="autos" className="each-slide-effect" style={{ 'backgroundImage': `url(${images[0]})` }}>
          <div class="slide-wrapper" >
              <div class="slide-container">
                <h3>Loremp ipsum dolor sit amet</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
                </p>
                <button class="secondary-btn">Click me!</button>
              </div>
          </div>
      </div>
      <div className="each-slide-effect"  style={{ 'backgroundImage': `url(${images[1]})` }}>
      <div class="slide-wrapper" >
              <div class="slide-container">
                <h3>Loremp ipsum dolor sit amet</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
                </p>
                <button class="secundary-btn">Click me!</button>
              </div>
          </div>
      </div>
      <div className="each-slide-effect" style={{ 'backgroundImage': `url(${images[2]})` }}>
      <div class="slide-wrapper" >
              <div class="slide-container">
                <h3>Loremp ipsum dolor sit amet</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
                </p>
                <button class="secundary-btn">Click me!</button>
              </div>
          </div>
      </div>
  </Slide>
    );
  }
}

export default slide;