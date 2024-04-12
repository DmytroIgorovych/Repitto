$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});

$('.autoplay').slick({
  rows:1,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplaySpeed: 5000,
  dots: true,
  variableWidth: true,
  responsive: [
        {
          breakpoint: 1440,
          settings: {
            arrows: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
          }
        },
        
      ]
});

// $('.slider').slick({
//     infinite: true,
//     centerMode: true,
//     centerPadding: '0px',
//     slidesToShow: 3,
//     responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// })

// $('.reviews-slider').slick({
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1
// })

