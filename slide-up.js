!function () {
    let locationTags = document.querySelectorAll('[location]')
    slideUp()
    window.addEventListener('scroll', function () {
        slideUp()
    })


    function findClosest() {
        let minIndex = 0
        for (let i = 0; i < locationTags.length; i++) {
            if (Math.abs(locationTags[i].offsetTop - window.pageYOffset) < Math.abs(locationTags[minIndex].offsetTop - window.pageYOffset)) {
                minIndex = i
            }
        }
        return minIndex
    }
    function slideUp() {
        let minIndex = findClosest()
        let id = locationTags[minIndex].id
        let li = document.querySelector('[href="#' + id + '"]').parentNode
        let liTags = li.parentNode.children
        for (let i = 0; i < liTags.length; i++) {
            liTags[i].classList.remove('highlight')
        }
        li.classList.add('highlight')
        for (let i = 0; i <= minIndex; i++) {
            locationTags[i].classList.add('active')
        }
    }
}()
