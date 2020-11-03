!function(){
    window.View = function (querySelector) {    
        this.el =  document.querySelector(querySelector)
        return this
    }
}.call()