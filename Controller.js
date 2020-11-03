!function () {
    window.Controller = function (options) {
        this.model = null
        this.view = null
        this.optionsInit = options.init
        this.init = function (view, model) {
            this.model = model
            this.view = view
            if (model) {
                this.model.init()
            }
            if (this.optionsInit) {
                this.optionsInit()
            }
        }
        for (let key in options) {
            if (key !== 'init')
                this[key] = options[key]
        }
    }
}.call()