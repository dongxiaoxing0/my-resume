!function () {
    var view = document.querySelector('.swiper-container')
    var controller = {
        view: null,
        swiper: null,
        options: {
            direction: 'horizontal',
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        },
        init: function (view) {
            this.view = view
            this.initSwiper()
        },
        initSwiper: function () {
            this.swiper = new Swiper(this.view, this.options)
        }
    }
    controller.init(view)
}()
