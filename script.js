// adding h1 to body
let body = document.getElementsByTagName("body")[0];
body.innerHTML = "<h1>Arvinder Singh Ghumman</h1>";

//adding styling to the h1
let h1 = body.getElementsByTagName("h1")[0];
h1.style.textAlign = "center";
h1.style.color = "#A9A9A9";

// appending into body
let input1 = document.createElement("input");
input1.type = "text";
input1.id = "first";
input1.name = "first";
input1.placeholder = "Enter your first digit here";
body.appendChild(input1);

body.appendChild(document.createElement("br"));

let input2 = document.createElement("input");
input2.type = "text";
input2.id = "second";
input2.name = "second";
input2.placeholder = "Enter your second digit here";
body.appendChild(input2);

body.appendChild(document.createElement("br"));

let sumBtn = document.createElement("button");
sumBtn.textContent = "Add";
body.appendChild(sumBtn);

body.appendChild(document.createElement("br"));

let p = document.createElement("p");
p.id = "result";
body.appendChild(p);

//arrow function
var sum = () => {
  document.getElementById("second").style.border = "1px solid black";
  document.getElementById("first").style.border = "1px solid black"
  let a = document.getElementById("first").value;
  let b = document.getElementById("second").value;
  
  try{
    if(isNaN(a) || isNaN(b))
      throw new Error("Enter valid number");
    let sum = parseFloat(a)+parseFloat(b);
    if (isNaN(sum))
      throw new Error("Enter valid values");
    document.getElementById("result").innerText = `Sum is : ${sum}`;
  }catch(error){
    if(isNaN(a)||isNaN(parseFloat(a))){
      document.getElementById("first").style.border = "2px solid red"
      document.getElementById("result").innerText = "First one is not a valid number";
    }
    if(isNaN(b)||isNaN(parseFloat(b))){
      document.getElementById("second").style.border = "2px solid red";
      if(isNaN(a)||isNaN(parseFloat(a))){
        document.getElementById("result").innerText = "First and Second are not valid numbers";
      }else{
        document.getElementById("result").innerText = "Second one is not a valid number";
      }
    }
  }
}

//styling the webpage
let input = document.getElementsByTagName("input");
for(let i=0;i<=1;i++){
  input[i].style.padding="5px 10px";
  input[i].style.borderRadius = "5px";
  input[i].style.border = "1px solid black";
  input[i].style.margin = "10px";
}

let headName = document.getElementsByTagName("h1")[0];
headName.style.marginBottom = "50px";

let paragh = document.getElementById("result");
  paragh.style.marginTop = "20px";
  paragh.style.marginLeft = "15px";
  paragh.style.fontWeight = "bold";

let btn = document.getElementsByTagName("button")[0];
  btn.style.padding="5px 20px";
  btn.style.borderRadius = "5px";
  btn.style.border = "1px solid black";
  btn.style.margin = "10px";
  btn.style.cursor = "pointer";
  btn.style.border = "2px solid #3498db";
  btn.style.background = "#ADD8E6";

//assigning event listner
window.onload = () => {sumBtn.addEventListener("click", sum)}