import React from 'react';
import iconSearch from '../../../assets/images/search.svg';


class searchNav extends React.Component {
  render(){
    return (
      <form class="d-flex">
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping"> <img src={iconSearch} alt="Logo autos del camino" width="19.51" height="18.13"/></span>
          <input type="text" class="form-control" placeholder="Buscar..." aria-label="Username" aria-describedby="addon-wrapping"/>
        </div>
      </form>
    );
  }
}

export default searchNav;