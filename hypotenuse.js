const input_sides = document.querySelectorAll(".input-side")
const output_info = document.querySelector(".output-info-font")
const calculate_hypotenuse_btn = document.querySelector("#calculate-hypotensuse")

calculate_hypotenuse_btn.addEventListener("click", calculateHypotenuseOfTriangle)

function calculateHypotenuseOfTriangle(){

    const side_a = input_sides[0].value;
    const side_b = input_sides[1].value;

    if(Number(side_a)<=0 || Number(side_b)<=0){
        output_info.innerText = "Values should be more than zero";
    }   
    else{ 
    console.log(input_sides[0])
    const sumOfSquares = calculateSumOfSquares(Number(side_a), Number(side_b))
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares)
    output_info.innerText = "Length of Hypotenuse is "+lengthOfHypotenuse.toFixed(2)
    }
}

function calculateSumOfSquares(s1, s2){
    const sumOfSquares = s1*s1 + s2*s2
    return sumOfSquares;
}