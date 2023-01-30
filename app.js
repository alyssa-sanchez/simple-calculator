let input = document.getElementById("input")
let equal = document.getElementById("equal")
let result = document.getElementById("result")

equal.addEventListener("click", () => {
	let answer = eval(input.value)
	result.textContent += " " + answer
})
