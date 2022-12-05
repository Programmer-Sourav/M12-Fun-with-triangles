const input_sides = document.querySelectorAll(".input-side")
const output_info = document.querySelector(".output-info-font")
const calculate_hypotenuse_btn = document.querySelector("#calculate-hypotensuse")

calculate_hypotenuse_btn.addEventListener("click", calculateHypotenuseOfTriangle)

function calculateHypotenuseOfTriangle(){
    console.log(input_sides[0])
    const sumOfSquares = calculateSumOfSquares(Number(input_sides[0].value), Number(input_sides[1].value))
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares)
    output_info.innerText = "Length of Hypotenuse is "+lengthOfHypotenuse.toFixed(2)
}

function calculateSumOfSquares(s1, s2){
    const sumOfSquares = s1*s1 + s2*s2
    return sumOfSquares;
}