// HEADER
window.onscroll = function showHeader() {
    let header = document.querySelector('.header');
    if(window.scrollY > 500) {
      header.classList.add('menu-fixed');
    } else {
      header.classList.remove('menu-fixed');
    }
  }


// Burger

let burger = document.querySelector('.burger'),
    adaptivemenu = document.querySelector('.adaptive-menu'),
    lists = document.querySelectorAll('.list__item'),
    body = document.body;

burger.addEventListener('click', function(){
    burger.classList.toggle('_active');
    adaptivemenu.classList.toggle('_active');
    body.classList.toggle('_lock');
    for(list of lists) {
        list.classList.toggle('_active');
    }
})

let productBoxes = document.querySelectorAll('.product-box'),
    productBoxBtns = document.querySelector('.btn'),
    productBoxIcons = document.querySelector('.product-box__icon');

    for (let productBox of productBoxes) {
        productBox.addEventListener('mouseenter', function(){
            productBox.classList.add('_active');
        })
        productBox.addEventListener('mouseleave', function(){
            productBox.classList.remove('_active');
        }) 
    }

//  Slider testimonials

$('.testimonials-slider-wrapper').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 1500,
    autoplay: 1,
    Infinity: true,
    pauseOnHover: true,
    waitForAnimate: false,

    responsive: [{
        breakpoint: 600,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
    }
}]
});

$('.shop__products').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 1500,
    autoplay: 0,
    Infinity: true,
    waitForAnimate: true,

    responsive: [   
    {
        breakpoint: 900,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1
    },
        breakpoint: 600,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        }
    }
]

});

   
// Scroll Animation

const animItems = document.querySelectorAll(`._animated`)
if (animItems.length > 0) {
    window.addEventListener(`scroll`, animOnScroll)

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index]
            const animItemHeight = animItem.offsetHeight
            const animItemOffSet = offset(animItem).top
            const animStart = 4
            let animItemPoint = window.innerHeight - animItemHeight / animStart
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }
            if ((window.scrollY > animItemOffSet - animItemPoint) && window.scrollY < (animItemOffSet + animItemHeight)) {
                animItem.classList.add(`_active`)
            } else {
                if (!(animItem.classList.contains(`_once-animated`))) {
                    animItem.classList.remove(`_active`)
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect()
        let scrollLeft = window.scrollY || document.documentElement.scrollLeft
        let scrollTop = window.scrollY || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    setTimeout(() => {
        animOnScroll()
    }, 300)
}
