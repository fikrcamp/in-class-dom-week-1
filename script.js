//DOM Manipulation
// Document Obeject Model

// let mainDiv = document.querySelector("#main");
// mainDiv.innerText = "Something new";
// mainDiv.style.backgroundColor = "red";
// mainDiv.style.padding = "10px";
// mainDiv.style.color = "white";

//Event listeners
// document.querySelector("#btn-change").addEventListener("click", function () {
//   document.querySelector("body").style.backgroundColor = "yellow";
//   document.querySelector("#heading").innerText = "WE HAVE CHANGED";
// });

// document.querySelector("#btn-name").addEventListener("click", function () {
//   let name = document.querySelector("#name").value; //abdi
//   let age = document.querySelector("#age").value;
//   document.querySelector(
//     "#display-name"
//   ).innerText = `Your name is ${name} and your age is ${age}`;
// });

// document.querySelector("#btn-drive").addEventListener("click", function () {
//   let age = document.querySelector("#age").value;

//   if (age > 18) {
//     document.querySelector("#result").innerText = "You can drive";
//     document.querySelector("body").style.backgroundColor = "green";
//   } else {
//     document.querySelector("#result").innerText = "You can't drive";
//     document.querySelector("body").style.backgroundColor = "red";
//   }
// });

// document.querySelector("#btn-bmi").addEventListener("click", function () {
//   let height = document.querySelector("#height").value;
//   let weight = document.querySelector("#weight").value;

//   let total = weight / height ** 2;

//   document.querySelector("#bmi-result").innerText = total;
// });

// document.querySelector("#btn-change").addEventListener("click", function () {
//   let newP = document.createElement("p"); // <p></p>
//   newP.innerText = "New P Tag"; //<p>New P Tag</p>
//   newP.style.color = "blue";
//   document.querySelector("#main").appendChild(newP);
// });

// document.querySelector("#heading").style.color = "red";
// document.getElementById("heading").style.color = "red";
// console.log(document.getElementsByClassName("heading"));

// document.getElementsByClassName("heading").style.color = "red";
