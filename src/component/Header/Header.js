import React from 'react';
import delcaminoLogo from '../../assets/images/Autos_del_camino.svg';
import SearchNav from './Navbar/Search';

class Header extends React.Component {

  componentDidMount () {
      

      window.addEventListener('scroll', function(){
        const nav = document.querySelector('.navbar');
        nav.classList.toggle("sticky-top", window.scrollY > 200);
      })
  }
  render(){
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3 ">
      <div class="container">
          <a class="navbar-brand" href="#autos" >
            <img src={delcaminoLogo} alt="Logo autos del camino" width="134" height="42"/>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto ">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#autos">Autos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#noticias">Noticias</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#FAQS" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  FAQs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contacto" tabindex="-1" aria-disabled="true">Contacto</a>
              </li>
            </ul>
             <SearchNav></SearchNav>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;