
// 1
// const colorbtn = document.querySelector("#colorbtn")
// colorbtn.addEventListener("click", function () {
//     document.body.style.background = getRandomColor()
// })
// function getRandomColor() {
//     const r = Math.floor(Math.random() * 256)
//     const g = Math.floor(Math.random() * 236)
//     const b = Math.floor(Math.random() * 256)

//     return `rgb(${r}, ${g} , ${b})`
// }





// // 2
// const darkmode = document.querySelector("#darkmode")
// const lightmode = document.querySelector("#lightmode")

// lightmode.addEventListener("click", function () {
//     document.body.style.background = '#ffffff';
//     document.style.color = '#000000'
// })
// darkmode.addEventListener("click", function () {
//     document.body.style.background = '#000000';
//     document.style.color = '#ffffff'
// })





// // 3

// const hiddenbtn = document.querySelector("#hiddenbtn")
// hiddenbtn, addEventListener('click', function () {
//     hiddenbtn.style.display = 'none'
// })





// // 4
const decrease = document.querySelector("#decrease")
const increase = document.querySelector("#increase")
const span = document.querySelector("#increasespan")
let count = 0

increase.addEventListener("click", function () {
    span.innerHTML = ++count
})
decrease.addEventListener("click", function () {
    span.innerHTML = --count
})




// // 5

const disablebtn = document.querySelector("#disable")
disable.addEventListener("click", function () {
    disablebtn.disabled = 'true'
})







// // 6


const textarea = document.querySelector("#textarea")
const textareapera = document.querySelector("#textareapera")


textarea.addEventListener("input", function () {
    textareapera.innerHTML = textarea.value.length
})











// // 7

const strongpassword = document.querySelector("#strongpassword");
const passwordpera = document.querySelector("#passwordpera");

strongpassword.addEventListener("input", function () {
    if (strongpassword.value.length >= 6) {
        passwordpera.innerHTML = ("Strong")
        passwordpera.style.color = 'green'
    }
    else {
        passwordpera.innerHTML = ("Week")
        passwordpera.style.color = 'red'
    }
})







// // 8

const enterinput = document.querySelector("#enterinput")

enterinput.addEventListener("keydown", function (e) {
    if (e.key === 'Enter') {
        alert('name is  ' + enterinput.value)
    }
})






// // 9

const upperinput = document.querySelector("#upperinput")
const upperinputpera = document.querySelector("#upperinputpera")

upperinput.addEventListener("input", function () {
    upperinputpera.innerHTML = upperinput.value.toUpperCase()
})



//  10
const inputbanned = document.querySelector("#inputbanned");
const form = document.querySelector("#banForm");

const bannedWords = ['spam', 'test'];

form.addEventListener('submit' , function(event){
    const value = inputbanned.value.toLowerCase();

    for( let word of bannedWords){
        if (value.includes(word)) {
            event.preventDefault();
      console.log("Banned word detected!");
      alert("You used a banned word!");
      return;
        }
    }
}
)











// 11






const country = document.querySelector("#countries");
const city = document.querySelector("#city");

const data = {
    Pakistan : ['Karachi' , 'Lahore' , 'pehawar'],
    India : ['Delhi' , 'Hyderabad' , 'Mumbai'],
    USA : ['New York' , 'Los Angles' , 'Chicago'],
    Japan : ['Tokyo' , 'Kawasaki' , 'Sapporo'],
}
country.addEventListener('change' , function(){
    city.innerHTML = `<option>Selected City</option>`

    let SelectedCountry = country.value
    if(SelectedCountry && data[SelectedCountry]){
    data[SelectedCountry].forEach (function(CityName){
        city.innerHTML += `<option value="${CityName}">${CityName}</option>`
    })
    }
})

// Q12
const validateField = document.querySelector("#validateField")
const nameField = document.querySelector("#nameField")
const emailField = document.querySelector("#emailField")

const nameError = document.querySelector("#nameError")
const emailError = document.querySelector("#emailError")
validateField.addEventListener("submit" , function (event) {
  let isValid = true;

  nameError.innerText = "";
  emailError.innerText = "";

  if (nameField.value === "") {
    nameError.innerText = "Name is required"
    isValid = false;
  }
  if(!emailField.value.includes("@") || !emailField.value.includes(".") ){
    emailError.innerText = "Enter a valid email"
    isValid = false;
  }
  if (!isValid) {
    event.preventDefault()
  }else{
    alert("Form submitted sucessfully")
  }
})
// Q13
const passwordField = document.querySelector("#passwordField")
const eyeIcon = document.querySelector("#eyeIcon")

eyeIcon.addEventListener("click" , function () {
  if(passwordField.type === "password"){
    passwordField.type = "text"
    eyeIcon.textContent = "click to hide"
  }else{
    passwordField.type = "password"
    eyeIcon.textContent = "👁️"
  }
})
// Q14
const colorPicker = document.querySelector("#colorPicker")
const previewBox = document.querySelector("#previewBox")

colorPicker.addEventListener("input" , function () {
  previewBox.style.backgroundColor = colorPicker.value
})
// Q15
const checkBox = document.querySelector("#checkBox")
const mySubmit = document.querySelector("#mySubmit")

checkBox.addEventListener("change" , function () {
  if (checkBox.checked) {
    mySubmit.disabled = false;
  }else{
    mySubmit.disabled = true
  }
})
// Q16
const img = document.querySelector("#img")
img.addEventListener("mouseover", function () {
  img.src = "./thumb-4.jpg"
  img.width = 200;
})
img.addEventListener("mouseout" , function () {
  img.src ="./thumb-4.jpg"
  img.width = 100;
})
// Q17
const btn = document.querySelector("#backToTop")
window.addEventListener("scroll" , function () {
  if (window.scrollY >= 300) {
    btn.style.display = "block"
  }else {
    btn.style.display = "none"
  }
})
btn.addEventListener("click" , function () {
  window.scrollTo(0 , 0)
})
// Q18
const nameArea = document.querySelector("#name")
const emailArea = document.querySelector("#email")

nameArea.addEventListener("input" , function () {
  localStorage.setItem("name" , nameArea.value)
})
emailArea.addEventListener("input" , function () {
  localStorage.setItem("email" , emailArea.value)
})
nameArea.value = localStorage.getItem("name") || "";
emailArea.value = localStorage.getItem("email") || "";
// Q19
const modal = document.querySelector("#modal")
const modalBox = document.querySelector("#modalBox")
const openBtn = document.querySelector("#openBtn")
openBtn.addEventListener("click" , function () {
  modal.style.display = "block";
})
modal.addEventListener ("click" , function (event) {
  if (event.target === modal) {
    modal.style.display = "none"
  }
})
// Q20
const output = document.querySelector("#output");

document.addEventListener("keydown", function (event) {
  const key = event.key;
  const skip = ["Shift", "Control", "Alt", "Meta", "Tab"];

  if (skip.includes(key)) {
    return; 
  }

  output.textContent += key + " ";
});