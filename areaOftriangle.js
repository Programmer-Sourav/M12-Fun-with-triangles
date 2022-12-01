const base_and_height = document.querySelectorAll(".input-side")
const check_area = document.querySelector("#check-area")
const outputInfo = document.querySelector("#output-info")

check_area.addEventListener("click", calculateAreaOfATriangle)


function calculateAreaOfATriangle(){
const areaOfTriangle = (Number(base_and_height[0].value) * Number(base_and_height[1].value))/2 
console.log(areaOfTriangle)
outputInfo.innerText = "Area of a Triangle "+areaOfTriangle
}