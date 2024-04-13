$('.slider').slick({
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