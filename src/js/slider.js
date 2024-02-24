let sliderItems = document.getElementsByClassName("recent-work-name")
const leftButton = document.getElementById("prev")
const rightButton = document.getElementById("next")
index = 0

rightButton.addEventListener("click", function(x) {
    console.log(1)
    sliderItems[index].toggle("hide")
    index++
    
})
