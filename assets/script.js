(function ($) {
  $(document).ready(function () {
    const searchBg = $('#search-bg')
    const searchBtn = $('#search-btn')
    const searchBox = $('#search')
    const toggleDropMenu = $('.toggle-drop-menu, .mega-toggle')
    const closeDropMenu = $('#mega-menu .menu-wrapper .close-menu')
    const megaMenu = $('#mega-menu')
    const megaMenuItem = $('#mega-menu .menu .item .link')
    const quantityButton = $('.quantity-selector .btn-quantity')
    const variantButtons = $('.variant-types .btn')
    const add2Cart = $('#add2cart')
    $(window).scroll(function () {
      const html = $('html'),
          header = $('header'),
          topHeader = $('.top-header')
      if ($(window).scrollTop() >= topHeader.height()) {
          html.addClass('header-shrinked')
          header.addClass('shrinked')
          topHeader.addClass('shrink')
        } else {
          html.removeClass('header-shrinked')
          header.removeClass('shrinked')
          topHeader.removeClass('shrink')
        }
    })
    document
      .querySelectorAll('.side-bar .options .option .link')
      .forEach(element => {
        if (window.location.pathname.includes(element.getAttribute('href').slice(0, -1))) {
          element.classList.add('active')
        }
      })
    window.addEventListener('scroll', e => {
      const header = document.querySelector('header'),
        sideBarContainer = document.querySelector(
          '.product-listing .side-bar-container'
        ),
        sideBar = document.querySelector('.product-listing .side-bar'),
        galleryContainer = document.querySelector(
          '.product .product-content .gallery.lg'
        ),
        galleryWrapper = document.querySelector(
          '.product .product-content .gallery.lg .wrap'
        )
      if (sideBar) {
        if (window.scrollY <= sideBar.offsetTop - header.offsetHeight - 20) {
          sideBar.style.transform = `translateY(0)`
        } else if (
          window.scrollY >= sideBar.offsetTop - header.offsetHeight - 20 &&
          window.scrollY <=
            sideBar.offsetTop -
              header.offsetHeight -
              20 +
              (sideBarContainer.offsetHeight - sideBar.offsetHeight - 233)
        ) {
          sideBar.style.transform = `translateY(${
            window.scrollY - sideBar.offsetTop + header.offsetHeight + 20
          }px)`
        }
      }
      if (galleryWrapper) {
        const winPosY = window.scrollY,
        headerSpace = 20,
        condition = [
          winPosY <=
            galleryWrapper.offsetTop - header.offsetHeight - headerSpace,
          winPosY >=
            galleryWrapper.offsetTop - header.offsetHeight - headerSpace,
          winPosY <=
            galleryWrapper.offsetTop -
              header.offsetHeight -
              headerSpace +
              (galleryContainer.offsetHeight - galleryWrapper.offsetHeight),
        ]
        if (condition[0]) {
          galleryWrapper.style.transform = `translateY(0)`
        } else if (condition[1] && condition[2]) {
            galleryWrapper.style.transform = `translateY(${
              winPosY -
              galleryWrapper.offsetTop +
              header.offsetHeight +
              headerSpace
            }px)`
          }
      }
    })
    searchBtn.click(function () {
      searchBg.removeClass('d-none')
      searchBox.removeClass('d-none')
    })
    searchBg.click(function () {
      searchBg.addClass('d-none')
      searchBox.addClass('d-none')
    })
    toggleDropMenu.click(function () {
      const firstItem = megaMenu.find('.menu .item:first-child .link')
      if(megaMenu.find('.preview-area img').length ===0){
        const menuItemImg = $("<img />", { alt: `item-image`, class: "img-fluid", src: firstItem.data('image'), loading: "lazy" })
        megaMenu.find('.preview-area').append(menuItemImg)
      } else {
        megaMenu.find('.preview-area img').attr('src', firstItem.data('image'))
      }
      firstItem.addClass('active')
      megaMenu.toggleClass('show')
    })
    closeDropMenu.click(function () {
      megaMenu.removeClass('show')
    })
    megaMenuItem.hover(function () {
      megaMenu.find('.link.active').removeClass('active')
      megaMenu.find('.preview-area img').attr('src', $(this).data('image'))
      $(this).addClass('active')
    })
    quantityButton.click(function () {
      const quantityValue = $(this).parents('.quantity-selector').find('.quantity-value')
      const currentVal = parseInt(quantityValue.text())
      if($(this).hasClass('minus')){
        if(currentVal > 1){
          quantityValue.text(currentVal - 1)
          add2Cart.data('quantity', currentVal - 1)
        }
      }else{
        quantityValue.text(currentVal + 1)
        add2Cart.data('quantity', currentVal + 1)
      }
    })
    variantButtons.click(function () {
      const current = $(this)
      const variantId = current.data('id')
      const title = current.data('title')
      $('.variant-types .btn.active').removeClass('active')
      current.addClass('active')
      $('.variant-types .denomination').text(title)
      add2Cart.data('variant', variantId)
    })

    new Swiper('.collection-swiper', {
      slidesPerView: 2,
      spaceBetween: 10,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: '.collection-swiper .swiper-pagination',
        clickable: false,
        type: 'fraction'
      },
      navigation: {
        nextEl: '.collection-slider .btn-swiper.next-icon',
        prevEl: '.collection-slider .btn-swiper.prev-icon'
      },
      breakpoints: {
        375: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        1200: {
          spaceBetween: 20,
          slidesPerView: 5
        }
      }
    })
    new Swiper('.blogs-swiper', {
      slidesPerView: 2,
      spaceBetween: 10,
      centeredSlides: true,
      loop: false,
      navigation: {
        nextEl: '.blogs-slider .btn-swiper.next-icon',
        prevEl: '.blogs-slider .btn-swiper.prev-icon'
      },
      breakpoints: {
        375: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3,
          centeredSlides: false
        },
        992: {
          spaceBetween: 20
        },
        1200: {
          centeredSlides: false,
          slidesPerView: 4
        }
      }
    })
    new Swiper('.featured-swiper', {
      slidesPerView: 2,
      spaceBetween: 30,
      navigation: {
        nextEl: '.featured-products .btn-swiper.next-icon',
        prevEl: '.featured-products .btn-swiper.prev-icon'
      },
      breakpoints: {
        375: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        1200: {
          spaceBetween: 20,
          slidesPerView: 3
        }
      }
    })
    new Swiper('.gallery-swiper', {
      slidesPerView: 2,
      spaceBetween: 10,
      centeredSlides: true,
      loop: true,
      navigation: {
        nextEl: '.gallery-slider .btn-swiper.next-icon',
        prevEl: '.gallery-slider .btn-swiper.prev-icon'
      },
      breakpoints: {
        375: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3,
          centeredSlides: false
        },
        1200: {
          spaceBetween: 20,
          slidesPerView: 4,
          centeredSlides: false
        }
      }
    })
    if($(".thumb-swiper").length > 0) {
      const swiper = new Swiper(".thumb-swiper", {
        loop: JSON.parse($(".thumb-swiper").data('loop')),
        spaceBetween: 7,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
        watchOverflow: true,
      })
      if($(".main-swiper").length > 0) {
        new Swiper(".main-swiper", {
          loop: JSON.parse($(".main-swiper").data('loop')),
          spaceBetween: 20,
          thumbs: {
            swiper: swiper,
          },
        });
      }
    }
    if($(".thumb-swiper-lg").length > 0) {
      const swiper = new Swiper(".thumb-swiper-lg", {
        loop: JSON.parse($(".thumb-swiper-lg").data('loop')),
        spaceBetween: 7,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
        watchOverflow: true,
      })
      if($(".main-swiper-lg").length > 0) {
        new Swiper(".main-swiper-lg", {
          loop: JSON.parse($(".main-swiper-lg").data('loop')),
          spaceBetween: 20,
          thumbs: {
            swiper: swiper,
          },
        });
      }
    }
  })
})(jQuery)
