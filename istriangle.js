const input_angles = document.querySelectorAll(".angle-input")
const check_button = document.querySelector("#is-it-a-triangle-btn")
const output = document.querySelector("#result-output")

check_button.addEventListener("click", checkIfItIsATriangle)

function checkIfItIsATriangle(){
    /*We are typcasting here... By default, all the values are String ***/
    console.log("Angles "+Number(input_angles[0].value)+", "+Number(input_angles[1].value)+", "+Number(input_angles[2].value))


 if(Number(input_angles[0].value)>0 && Number(input_angles[1].value)>0 && Number(input_angles[2].value>0 )){
    const sumofAngles = getTheSumOfAngles(Number(input_angles[0].value), Number(input_angles[1].value), Number(input_angles[2].value))
    
    if(sumofAngles === 180){
        output.innerText = "These angles form a Triangle..."
    }
    else{
        output.innerText = "Oops! It's not a Triangle..."
    }
}
else{
    output.innerText = "Kindly check if all entered values are valid. Please try again!"
}
}

function getTheSumOfAngles(angle1, angle2, angle3)
{
   const sum = angle1 + angle2 + angle3
   console.log("Sum "+sum)
   return sum
}