!function () {
    var model = new Model('Messages')
    var view = new View('.messages')
    var controller = new Controller({
        init: function () {
            this.bindEvents()
            this.loadMessages()
        },
        bindEvents: function () {
            let messagesForm = this.view.el.querySelector('form[name = messages]')
            messagesForm.addEventListener('submit', (e) => {
                e.preventDefault()
                this.saveMessages()
            })
        },
        loadMessages: function () {
            this.model.fetch().then((messages) => {
                let array = messages.map(function (x) {
                    return {
                        message: x.attributes.message,
                        userName: x.attributes.userName
                    }
                })
                array.forEach((value) => {
                    let li = document.createElement('li')
                    let span1 = document.createElement('span')
                    let span2 = document.createElement('span')
                    span1.innerText = value.userName
                    span2.innerText = value.message
                    li.append(span1)
                    li.append(span2)
                    let ol = this.view.el.querySelector('.messageBoard')
                    ol.append(li)
                })
            })
        },
        saveMessages: function () {
            this.model.save({ userName: userName.value, message: messageContent.value }).then((message) => {
                let li = document.createElement('li')
                let span1 = document.createElement('span')
                let span2 = document.createElement('span')
                span1.innerText = userName.value
                span2.innerText = messageContent.value
                li.append(span1)
                li.append(span2)
                let ol = this.view.el.querySelector('.messageBoard')
                ol.append(li)
                userName.value = ''
                messageContent.value = ''
            })
        }
    })
    controller.init(view, model)

}.call()
