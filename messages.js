!function () {
    var model = {
        init: function () {
            AV.init({
                appId: "LdylREAHsK99rEXGKXHBE9c5-gzGzoHsz",
                appKey: "yqItNvVsyKzC2USWtrknp6em",
                serverURL: "https://ldylreah.lc-cn-n1-shared.com"
            })
        },
        fetch: function () {
            var query = new AV.Query('Messages');
            return query.find()
        },
        save: function (userName, messageContent) {
            let Messages = AV.Object.extend('Messages')
            let message = new Messages();
            message.set('userName', userName)
            message.set('message', messageContent)
            return message.save()
        }
    }
    var view = View('.messages')
    var controller = {
        model: null,
        view: null,
        init: function (view, model) {
            this.model = model
            this.view = view
            this.model.init()
            this.loadMessages()
            this.bindEvents()
            
        },
        bindEvents: function () {
            let messagesForm = this.view.querySelector('form[name = messages]')
            messagesForm.addEventListener('submit', (e) => {
                e.preventDefault()
                this.saveMessages()
            })
        },
        loadMessages:function(){
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
                    let ol = this.view.querySelector('.messageBoard')
                    ol.append(li)
                })
            })
        },
        saveMessages:function(){
            this.model.save(userName.value, messageContent.value).then((message) => {
                let li = document.createElement('li')
                let span1 = document.createElement('span')
                let span2 = document.createElement('span')
                span1.innerText = userName.value
                span2.innerText = messageContent.value
                li.append(span1)
                li.append(span2)
                let ol = document.querySelector('.messages .messageBoard')
                ol.append(li)
                userName.value = ''
                messageContent.value = ''
            })
        }
    }
    controller.init(view, model)

}.call()
