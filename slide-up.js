!function () {
    
    slideUp()
    window.addEventListener('scroll', function () {
        slideUp()
    })
    function slideUp() {
        let locationTags = document.querySelectorAll('[location]')
        let minIndex = 0
        for (let i = 1; i < locationTags.length; i++) {
            if (Math.abs(locationTags[i].offsetTop - window.scrollY) < Math.abs(locationTags[minIndex].offsetTop - window.scrollY)) {
                minIndex = i
            }
        }
        let id = locationTags[minIndex].id
        let li = document.querySelector('[href="#' + id + '"]').parentNode
        let liTags = li.parentNode.children
        for (let i = 0; i < liTags.length; i++) {
            liTags[i].classList.remove('highlight')
        }
        li.classList.add('highlight')
        // for(let i = 0; i < locationTags.length; i++){
        //     locationTags[i].classList.remove('active')
        // }
        locationTags[minIndex].classList.add('active')
    }
}()
