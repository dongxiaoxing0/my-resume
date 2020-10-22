!function () {
    var view = topNavBar
    var controller = {
        view: null,
        init: function (view) {
            this.view = view;
            this.bindEvents()
        },
        bindEvents: function () {
            window.addEventListener('scroll', (e) =>{
                if (window.scrollY == 0) {
                    this.active()
                } else {
                    this.deactive()
                }
            })
        },
        active: function(){
            this.view.classList.remove('sticky');
        },
        deactive: function(){
            this.view.classList.add('sticky');
        }
    }
    controller.init(view)
}()
