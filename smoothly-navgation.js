!function(){
    let li = document.querySelectorAll('.topNavBar nav > ul > li');
for (let i = 0; i < li.length - 1; i++) {
    li[i].onmouseenter = function (e) {
        e.currentTarget.classList.add('active')
    }
    li[i].onmouseleave = function (e) {
        e.currentTarget.classList.remove('active')
    }
}
let aTags = document.querySelectorAll('.topNavBar nav > ul > li > a');
for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (e) {
        e.preventDefault();
        let href = e.currentTarget.getAttribute('href');
        let targetElement = document.querySelector(href);
        let top = targetElement.offsetTop;
        let currentTop = window.scrollY;
        let s = Math.abs(currentTop - top);
        let t = (s / 100) * 300;
        if (t > 500) { t = 500 }
        function animate(time) {
            requestAnimationFrame(animate)
            TWEEN.update(time)
        }
        requestAnimationFrame(animate)

        const coords = { y: currentTop }
        const tween = new TWEEN.Tween(coords)
            .to({ y: top - 70 }, 1000)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(() => {
                window.scrollTo(0, coords.y)
            })
            .start()
    }
}
}()





