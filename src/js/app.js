import '../scss/app.scss';

/* Your JS Code goes here */

/* Demo JS */
import './demo.js';
import $ from 'jquery';

import 'slick-carousel';

// alert('labas');

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});

// alert("labas");
