const burger = document.getElementById("burger")
document.addEventListener("DOMContentLoaded", function() {
    burger.addEventListener("click", function(e) {
        e.stopPropagation()
        document.querySelector("header").classList.toggle("open")
    })
})
window.addEventListener("click", function() {
    document.querySelector("header").classList.remove("open")
})
