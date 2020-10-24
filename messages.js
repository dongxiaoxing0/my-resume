AV.init({
    appId: "LdylREAHsK99rEXGKXHBE9c5-gzGzoHsz",
    appKey: "yqItNvVsyKzC2USWtrknp6em",
    serverURL: "https://ldylreah.lc-cn-n1-shared.com"
});
var Messages = AV.Object.extend('Messages')
let messagesForm = document.querySelector('.messages form')
messagesForm.addEventListener('submit', function (e) {
    e.preventDefault()
    let message = new Messages();
    message.set('userName', userName.value)
    message.set('message', messageContent.value)
    message.save().then((message) => {})
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

const query = new AV.Query('Messages');
query.find().then((messages) => {
    let array = messages.map(function (x) {
        return {
            message: x.attributes.message,
            userName: x.attributes.userName
        }
    })
    array.forEach(function (value) {
        let li = document.createElement('li')
        let span1 = document.createElement('span')
        let span2 = document.createElement('span')
        span1.innerText = value.userName
        span2.innerText = value.message
        li.append(span1)
        li.append(span2)
        let ol = document.querySelector('.messages .messageBoard')
        ol.append(li)
    })
});