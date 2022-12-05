const length_and_breadh = document.querySelectorAll(".rectangle-mesaurement")
const rectArea = document.querySelector("#check-area")
const outputInfo = document.querySelector(".output-info-font")


rectArea.addEventListener("click", getAreaOfRectangle)

function getAreaOfRectangle(){

if(Number(length_and_breadh[1].value)>=Number(length_and_breadh[0].value)){
    outputInfo.innerText = "Length should be greater than width"
}    

else if(Number(length_and_breadh[0].value>0) && Number(length_and_breadh[1].value>0)){
const length = Number(length_and_breadh[0].value);
const width = Number(length_and_breadh[01].value)

const areaOfTriangle = length*width

outputInfo.innerText = "Area of a Rectangle "+areaOfTriangle

} 
else{
    outputInfo.innerText = "Length and Bredth should be non zero values.. Kindly re enter values..."
}
}