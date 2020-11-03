!function () {
    var view = new View('.topNavBar')
    var controller = {
        view: null,
        init: function (view) {
            this.view = view;
            this.bindEvents()
            if (window.scrollY != 0) {
                    this.active()
            }
        },
        bindEvents: function () {
            window.addEventListener('scroll', (e) => {
                if (window.scrollY == 0) {
                    this.deactive()
                } else {
                    this.active()
                }
            })
        },
        active: function () {
            this.view.el.classList.add('sticky')
        },
        deactive: function () {
            this.view.el.classList.remove('sticky')
        }
    }
    controller.init(view)
}()
