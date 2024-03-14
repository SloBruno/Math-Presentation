const glider = document.querySelector('.glider');

new Glider(glider,{
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,

    arrows: {
        prev: '#glider-prev',
        next: '#glider-next'
      }
})