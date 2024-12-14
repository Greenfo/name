(function(){
    //catalog

    //

    const catalogBtn = document.querySelector('.catalog__button-mobile');
    const catalog = document.querySelector('.catalog__content');
    catalogBtn.addEventListener('click', ()=>{
        
        if (catalog.style.maxHeight === catalog.scrollHeight + 'px') {
            catalog.style.maxHeight = null
        }else{
            catalog.style.maxHeight = catalog.scrollHeight + 'px'
        }
    })

    //scroll button
    window.addEventListener('scroll', ()=>{
        
        const scrollButton = document.querySelector('.up-button')
        const scrollPosition = window.scrollY;
        const halfPage = document.documentElement.scrollHeight / 2;
        if (scrollPosition >= halfPage) {
            scrollButton.classList.add('up-button--active')
        }else if (scrollPosition <= halfPage) {
            scrollButton.classList.remove('up-button--active')
        }
        scrollButton.addEventListener('click', ()=>{
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
    })


    //burger menu
    const catalogButton = document.querySelector('.burger__item-catalog')
    const catalogMenu = document.querySelector('.burger__catalog')
    catalogButton.addEventListener('click', () =>{
        catalogMenu.classList.toggle('burger__catalog--active')
        if (catalogMenu.classList.contains('burger__catalog--active')) {
            catalogMenu.style.maxHeight = catalogMenu.scrollHeight + 'px'
        }else {
            catalogMenu.style.maxHeight = null
        }
    })

    const MenuControls = document.querySelector('.menu__links')

    MenuControls.addEventListener('click', toggleList)

    function toggleList(e){
        const MenuControl = e.target.closest('.menu__link')

        if(!MenuControl) return
        e.preventDefault()
        if(MenuControl.classList.contains('menu__link--active')) return

        const MenuContentId = MenuControl.getAttribute('href')
        const MenuContent = document.querySelector(MenuContentId)
        const activeControl = document.querySelector('.menu__link--active')
        const activeContent = document.querySelector('.menu__list--show')

        
        if(activeContent){
            activeContent.classList.remove('menu__list--show')
        }
        if(activeControl){
            activeControl.classList.remove('menu__link--active')
        }
        
        MenuContent.classList.add('menu__list--show')
        MenuControl.classList.add('menu__link--active')
        
    }
    
    //burger
    document.addEventListener('click',  burgerInit)
    function burgerInit(e){

        const burgerIcon = e.target.closest('.burger__icon')  
        
        if (document.documentElement.clientWidth > 768) return
        if (!burgerIcon) return

        document.body.classList.toggle('body--opened-menu')
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }



    // like
    const like = document.querySelectorAll('.products__item-like')
    for (let i = 0; i < like.length; i++) {
        like[i].addEventListener("click", function() {
        like[i].classList.toggle('products__item-like--active');
        });
    }

    /// menu
    const buttonMenu = document.querySelector('.header__catalog-button')
    const Menu = document.querySelector('.header__menu')
    if(document.querySelector('.header__menu').classList.contains('header__menu--opened')){
        console.log('success');
    }
    buttonMenu.addEventListener('click', menuInit)
    document.addEventListener('click', menuRemove)

    function menuInit(e){
        e.preventDefault()
        Menu.classList.toggle('header__menu--opened')
    }
    function menuRemove(e) {
        const target = e.target
        if (target.contains(buttonMenu))return
        
        if(!target.closest('.header__menu')){
            Menu.classList.remove('header__menu--opened')
        }
    }

    //products
    const products  = document.querySelector('.products__list')
    mixitup(products)


    //slider
    const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
        let swiper;
    
        breakpoint = window.matchMedia(breakpoint);
    
        const enableSwiper = function(className, settings) {
            swiper = new Swiper(className, settings);
    
            if (callback) {
            callback(swiper);
            }
        }
    
        const checker = function() {
            if (breakpoint.matches) {
            return enableSwiper(swiperClass, swiperSettings);
            } else {
            if (swiper !== undefined) swiper.destroy(true, true);
            return;
            }
        };
    
        breakpoint.addEventListener('change', checker);
        checker();
    }
    
    const someFunc = (instance) => {
        if (instance) {
            instance.on('slideChange', function (e) {
            console.log('*** mySwiper.activeIndex', instance.activeIndex);
            });
        }
    };
    //hero
    new Swiper ('.products__item-slider', {
        pagination:{
            el:'.products__item-pagination',
        },
    })
    new Swiper ('.hero__slider', {
        navigation: {
            nextEl: '.hero__next',
            prevEl: '.hero__prev',
        },
        direction: "horizontal",
        pagination:{
            el:'.hero__pagination',
        },
        breakpoints:{
            769:{
                direction: "vertical",
            },
        },
    })

    //brand
    new Swiper('.brand__swiper', {
            spaceBetween:20,
            slidesPerView: 3,
            navigation: {
                nextEl: '.brand__next',
                prevEl: '.brand__prev',
            },
            grid:{
                rows:2,
                fill:'row'
            },
            breakpoints:{
                451:{
                    spaceBetween:40,
                    slidesPerView: 3,
                    grid:{
                        rows:2,
                        fill:'row'
                    },
                },
                769:{
                    spaceBetween:40,
                    slidesPerView:5,
                    grid:{
                        rows:2,
                        fill:'row'
                    },
                },
            },
    });
    //products
    resizableSwiper(
        '(max-width:768px)',
        '.products__slider',
        {
            slidesPerView:1,
            spaceBetween:20,
            pagination:{
                el: '.products__pagination',
            },
            breakpoints:{
                501:{
                    slidesPerView:2,
                },
                701:{
                    slidesPerView:3,
                },
            },
        }
    );
    // testimonials
    const swiper = new Swiper('.testimonials__slider', {
        // Optional parameters
        slidesPerView:1,
        spaceBetween:20,
        centeredSlides:true,
        // If we need pagination
        pagination: {
            el: '.testimonials__pagination',
        },
        breakpoints:{
            600:{
                slidesPerView:1.5,
            },
            769:{
                slidesPerView:1.5,
                centeredSlides:true,
            },
            1250:{
                slidesPerView:2,
                centeredSlides:false,
            }
        },
        // Navigation arrows
        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },
        
    });
})()