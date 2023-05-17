// Client Slider

jQuery(document).ready(function($) {
      $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [{
          breakpoint: 950,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
        {
           breakpoint: 400,
           settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1
           }
        }]
    });
});



// gallery



const filterContainer = document.querySelector(".gallery-filter"),
galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) =>{
  if(event.target.classList.contains("filter-item")){
       // deactivate existing active 'filter-item'
       filterContainer.querySelector(".active").classList.remove("active");
       // activate new 'filter-item'
       event.target.classList.add("active");
       const filterValue = event.target.getAttribute("data-filter");
       galleryItems.forEach((item) =>{
      if(item.classList.contains(filterValue) || filterValue === 'all'){
          item.classList.remove("hide");
           item.classList.add("show");
      }
      else{
          item.classList.remove("show");
          item.classList.add("hide");
      }
       });
  }
});