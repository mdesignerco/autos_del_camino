import './style/sass/main.scss';
import 'normalize-scss';
import 'normalize-scss';

import Header from './component/Header/Header';
import Slide from './component/Autos/slide';
import Noticias from './component/Noticias/Noticias';
import Faqs from './component/Faqs/Faqs';
import Contact from './component/Contacto/Contact';

function App() {
  return (
    <>
      <Header/>
      <Slide/>
      <Noticias/>
      <Faqs />
      <Contact />
    </>
  );
}

export default App;
