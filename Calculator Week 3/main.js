//Button operations
let add = document.getElementById("add"), 
subtract = document.getElementById("subtract"), 
multiply = document.getElementById("multiply"), 
divide = document.getElementById("divide"), 
clearbutton = document.getElementById("clear"),
equals = document.getElementById("equals");


//Array for operations
let allNumbers = [];

//create this variable for the for loop
let numbers = document.querySelectorAll(".number");

//buttons all have the same class = .number
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function(event){
    let valueAsInteger = parseInt(event.target.value);
    allNumbers.push(valueAsInteger);
    document.getElementById("answer").value += event.target.value;
  })
};
add.addEventListener("click", function(event){
  document.getElementById("answer").value += "+";
  allNumbers.push("+");
});
subtract.addEventListener("click", function(event){
  document.getElementById("answer").value += "-";
  allNumbers.push("-");
});
divide.addEventListener("click", function(event){
  document.getElementById("answer").value += "/";
  allNumbers.push("/");
});
multiply.addEventListener("click", function(event){
  document.getElementById("answer").value += "*";
  allNumbers.push("*");
});
equals.addEventListener("click", function(event){
  let numbers = [];
  let operators = [];
  let bers = "";
  // 33+9
  for (let i = 0; i < document.getElementById("answer").value.length; i++){
      if (document.getElementById("answer").value[i] === "+" || document.getElementById("answer").value[i] === "-" || document.getElementById("answer").value[i] === "/" || document.getElementById("answer").value[i] === "*"){
        operators.push(document.getElementById("answer").value[i]);
        numbers.push(parseFloat(bers));
        bers = '';
      } else {
        bers += document.getElementById("answer").value[i];


      }
  }

  numbers.push(parseFloat(bers));
  console.log(numbers);
  console.log(operators);

  if (operators[0] === "+"){
    let result = numbers[0] + numbers[1];
    document.getElementById("answer").value = result;
  }
  if (operators[0] === "-"){
    let result = numbers[0] - numbers[1];
    document.getElementById("answer").value = result;
  }
  if (operators[0] === "*"){
    let result = numbers[0] * numbers[1];
    document.getElementById("answer").value = result;
  }
  if (operators[0] === "/"){
    let result = numbers[0] / numbers[1];
    document.getElementById("answer").value = result;
  }
  // let a = allNumbers[0];
  // let b = allNumbers[0];
  // if (allNumbers[0] === "+") {
  //   let result = a + b;
  // } else if (allNumbers[0] === "-") {
  //   let result = a - b;
  // } else if (allNumbers[0] === "/") {
  //   let result = a / b;
  // } else if (allNumbers[0] === "*") {
  //   let result = a * b;
  // }
  // console.log(allNumbers);
  // document.getElementById("answer").value = result;
});
clearbutton.addEventListener("click", function(event){
  document.getElementById("answer").value = "";
  allNumbers = [];
});



