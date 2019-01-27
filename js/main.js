$(document).ready(function() {
  $('.header-01 .trigger-mobile').on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $('.header-01 .header__nav').toggleClass('show');
  });

  $('.header-01 .search-button--mobile').on('click', function(event) {
    event.preventDefault();
    $('.header-01 .header-search__form').toggleClass('show');
  });

  $('.header-search__form .close-item').on('click', function(event) {
    event.preventDefault();
    $('.header-01 .header-search__form').removeClass('show');
  });

  $('.home__product .tab-01 .tab-name__menu .item').on('click', function(event) {
    event.preventDefault();
    $('.home__product .tab-01 .tab-name__menu .item').removeClass('active');
    $(this).addClass('active');

    let index = $(this).attr('data-index');
    // console.log(index);
    $('.home__product .tab-content__menu .item').removeClass('show');
    $('.home__product .tab-content__menu > .item').map((i, ele)=>{
      console.log(ele);
      if ($(ele).attr('data-index') === index) {
        console.log(index);
        $(ele).addClass('show');
        reCreateSlide();
      }
    });
  });


  // product submenu categories
  $('.product__categories .category-01 .item').on('click',function(event) {
    event.preventDefault();
    if (!$(this).hasClass('show-sub-menu')) {
      $('.product__categories .category-01 .item').removeClass('show-sub-menu');
    }
    $(this).toggleClass('show-sub-menu');
  });

  $('.product__categories .category-01 .title').on('click', function(event) {
    event.preventDefault();
    if ($(window).width() < 992) {
      $(this).closest('.category-01').toggleClass('show');
    }
  });

  $('.product__list .top-box .filter').on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
  });

  $('.product__list .top-box .filter .select .option').on('click', function(event) {
    event.preventDefault();
    let t = $(this).text();
      $(this).closest('.filter').find('.title__text').text(t);  
  });

  // end product submenu categories


  // rate item product-detail
  var numberOrder = 1;
  var addNumberOrder = ()=> {
    numberOrder+=1;
  }

  var descNumberOrder = ()=> {
    if (numberOrder > 1) {
      numberOrder-=1;
    }
  }
  
  $('.count__order .add').on('click', function(event) {
    event.preventDefault();
    addNumberOrder();
    $(this).prev('.number').text(numberOrder);
  });

  $('.count__order .desc').on('click', function(event) {
    event.preventDefault();
    descNumberOrder();
    $(this).next('.number').text(numberOrder);
  });
  

  $('.product-review-box .content-box .rate .item').click(function(event) {
    event.preventDefault();
    $('.product-review-box .content-box .rate .item .star')
      .removeClass('fa-star')
      .addClass('fa-star-o');

    let t = $(this).attr('data-index');

    $('.product-review-box .content-box .rate .item').map ((index, ele)=>{
      if ($(ele).attr('data-index') <= t) {
        $(ele).find('.fa')
        .removeClass('fa-star-o')
        .addClass('fa-star');
      } else {
        return 0;
      }
    })
  });
  // end rate item product-detail

  // calculator
  $('.calculator__content .close-item').on('click', function(event) {
    event.preventDefault();
    $('.calculator__content-wrapper').removeClass('show');
    $('.calc-link.calc-link-02').removeClass('active');
  });

  $('.calc-link.calc-link-02').on('click', function(event) {
    event.preventDefault();
    $('.calculator__content-wrapper').addClass('show');
    $(this).addClass('active');
  });

  $('.calculator__submit').on('click',function(event) {
    event.preventDefault();
    $('.calculator__result').addClass('show');
  });

  let reCreateSlide = ()=> {
    productSwiper.update();
    productSwiper2.update();
    productSwiper3.update();
    productSwiper4.update();
    productSwiper5.update();
  }

  // product slide home page
  var productSwiper = new Swiper('.product-swiper-container-01', {
    nextButton: '.tab-control .next-button',
    prevButton: '.tab-control .prev-button',
    pagination: '.product-swiper-container-01 .swiper-pagination',
    slidesPerView: 4,
    spaceBetween: 40,
    // Responsive breakpoints
    breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is <= 767px
      767: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is <= 992px
      992: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });

  var productSwiper2 = new Swiper('.product-swiper-container-02', {
    nextButton: '.tab-control .next-button',
    prevButton: '.tab-control .prev-button',
    pagination: '.product-swiper-container-02 .swiper-pagination',
    slidesPerView: 4,
    spaceBetween: 40,
    // Responsive breakpoints
    breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is <= 767px
      767: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is <= 992px
      992: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });

  var productSwiper3 = new Swiper('.product-swiper-container-03', {
    nextButton: '.tab-control .next-button',
    prevButton: '.tab-control .prev-button',
    pagination: '.product-swiper-container-03 .swiper-pagination',
    slidesPerView: 4,
    spaceBetween: 40,
    // Responsive breakpoints
    breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is <= 767px
      767: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is <= 992px
      992: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });

  var productSwiper4 = new Swiper('.product-swiper-container-04', {
    nextButton: '.tab-control .next-button',
    prevButton: '.tab-control .prev-button',
    pagination: '.product-swiper-container-04 .swiper-pagination',
    slidesPerView: 4,
    spaceBetween: 40,
    // Responsive breakpoints
    breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is <= 767px
      767: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is <= 992px
      992: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });

  var productSwiper5 = new Swiper('.product-swiper-container-05', {
    nextButton: '.tab-control .next-button',
    prevButton: '.tab-control .prev-button',
    pagination: '.product-swiper-container-05 .swiper-pagination',
    slidesPerView: 4,
    spaceBetween: 40,
    // Responsive breakpoints
    breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is <= 767px
      767: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is <= 992px
      992: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });

  var feedBack = new Swiper('.feedback-swiper-container', {
    nextButton: '.tab-control .next-button',
    prevButton: '.tab-control .prev-button',
    pagination: '.feedback-swiper-container .swiper-pagination',
    slidesPerView: 3,
    spaceBetween: 40,
    spaceBetween: 30,
    // Responsive breakpoints
    breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is <= 767px
      767: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is <= 992px
      992: {
        slidesPerView: 2,
        spaceBetween: 30
      }
    }
  });
});