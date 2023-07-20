
// Owl slider
$(document).ready(function(){
  $(".slider-one").owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            margin: 20,
            startPosition: 0,
            items: 3,
            navContainer: '.owl-controls',
            navText: [$('.projects__slider-btn-prev'), $('.projects__slider-btn-next')],
            autoplay: true,
            autoplayTimeout: 2000,
            responsive: {
              100: {
                items: 1,
                startPosition: 1,
                },
              360: {
                items: 1,
                startPosition: 1,
                },
                660: {
                    items: 2,
                    startPosition: 1,
                },
                850: {
                    items: 2,
                    startPosition: 1,
                },
                1060: {
                  items: 2,
                  margin: 30,
                },
                1200: {
                    items: 3,
                    margin: 30,
                },
            },
        });

        $('.projects__slider-btn-prev').click(function() {
          owl.trigger('prev.owl.carousel');
        });
        
        $('.projects__slider-btn-next').click(function() {
          owl.trigger('next.owl.carousel');
        });   
        
   
    $(".slider-two").owlCarousel({
        loop: true, 
        margin: 10, 
        nav: false, 
        autoplay: true, 
        dots: false,
        smartSpeed: 500, 
        autoplayTimeout: 4000,
        items: 7,
        pagination: false,
        responsive: {
          100: {
            items: 1,
            startPosition: 1,
            },
          360: {
            items: 2,
            startPosition: 1,
            },
            640: {
                items: 3,
                startPosition: 1,
            },
            850: {
                items: 5,
                startPosition: 1,
            },
            1060: {
              items: 5,
              margin: 30,
            },
            1200: {
                items: 5,
                margin: 30,
            },
        },
    });
});  

// Swiper slider

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
  },
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next-now',
    prevEl: '.swiper-button-prev-now',
  },
  breakpoints: {
    560: {

    }
  },
});

// Counter

(function count() {

  let counter = document.querySelectorAll('.counter');
  let limit = 0; 
  window.addEventListener('scroll', function(){  
    if( limit == counter.length ){ return; }
    
    for(let i = 0; i < counter.length; i++){
      let pos = counter[i].getBoundingClientRect().top; 
      let win = window.innerHeight - 40; 
      if( pos < win && counter[i].dataset.stop === "0" ){
        counter[i].dataset.stop = 1; 
        let x = 0;
        limit++; 
        let int = setInterval(function(){
          
          x = x + Math.ceil( counter[i].dataset.to / 30 ); 
          counter[i].innerText = x;
          if( x > counter[i].dataset.to ){
            
            counter[i].innerText = counter[i].dataset.to;
            clearInterval(int);
          }
        }, 60);
      }
    }
  });
  
  })();

//Accordeon

let accordeons = document.querySelectorAll('.faq__accordeon-item-header').forEach((el) => {
  el.addEventListener('click', () => {
    
    let content = el.nextElementSibling;

     if (content.style.maxHeight) {
        document.querySelectorAll('.faq__accordeon-item-body').forEach((el) => el.style.maxHeight = null)
    } else {
      document.querySelectorAll('.faq__accordeon-item-body').forEach((el) => el.style.maxHeight = null)
      content.style.maxHeight = content.scrollHeight + 'px';
    }

  })
})

$('.faq__accordeon-item-header').click(function(e) {
  e.preventDefault();
  $(this).find('.fa-chevron-down').toggleClass('rotate');
});

