import React from 'react';
import '../../style/sass/_card.scss';

import iconMore from '../../assets/images/see_more.svg'


function Card ({image, title, autor,  description, url} ) {
  return (
    <div class="card__news">
      <div class="card__news-wrapper row align-items-center">
        <div class="col-md-12 col-lg-6">
          <picture class="card__news-picture">
            <img
              src={`${image}`} a
              class="img-fluid card__news-image"
              alt={`${title}`}
            />
          </picture>
          </div>
        <div class="col-md-12 col-lg-6 ">
          <div class="card__news-content px-3 px-md-5 pt-3  pt-md-4 pb-3 pb-md-4 ">
            <h3>{title}</h3>
            <span>{autor}</span>
            <p>{description}</p>
            <a
              href={url}
              class="card__news-see_more"
              target="_blank"
              rel="noopener noreferrer"
            >
              < img src={iconMore} alt="icon-more" width="19.5" height="18.27"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;