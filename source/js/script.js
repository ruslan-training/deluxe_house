// Parallax fade
// const contentBg = document.getElementById('bg')
// window.addEventListener('scroll', function(){
//     contentBg.style.opacity = 1 - +window.pageYOffset/750+''
//     contentBg.style.top = +window.pageYOffset+'px'
//     contentBg.style.backgroundPositionY = - +window.pageYOffset/2+'px'
// })

// Burger

let burger = document.querySelector('.burger'),
    adaptivemenu = document.querySelector('.nav'),
    lists = document.querySelectorAll('.header__item'),
    body = document.body;

burger.addEventListener('click', function(){
    burger.classList.toggle('_active');
    adaptivemenu.classList.toggle('_active');
    body.classList.toggle('_lock');
    for(list of lists) {
        list.classList.toggle('_active');
    }
})


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
