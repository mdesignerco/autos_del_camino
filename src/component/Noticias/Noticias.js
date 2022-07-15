import React from 'react';
import '../../style/sass/_noticias.scss';
import Card from './Card';
import Data from '../../data.json';

class Noticias extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sites: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async() => {
    try {
      this.setState( { sites: Data.noticias } )
    } catch ( error ) {
      return console.error(error);
    }
  }
  render(){
    return (
      <div className="container-fluid p-3 p-5-md " id="noticias">
        <div class="row mb-3">
          <div class="col">
            <div className="container" >
              <h2>Noticias</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div className="container" >
              <ul class="card__wrapper">
                {
                  this.state.sites.map( site => {
                    console.log(site);
                    return  (
                    <li class="card__wrapper-item">
                      <Card
                        key = {site.id}
                        image = {site.image}
                        title = {site.title}
                        autor = {site.autor}
                        description = {site.description}
                        url = {site.url}
                      />
                    </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Noticias;