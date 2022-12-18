let input = document.querySelectorAll("input")
let label = document.querySelectorAll("label")

for (let i = 0; i < input.length; i++) {
    console.log(i)
    input[i].addEventListener("focus", function () { 
        label[i].classList.add("label_active"); 
        input[i].classList.add("input_active") 
    })
    input[i].addEventListener("blur", function () { 
        if (input[i].value == "") { 
            label[i].classList.remove("label_active"); 
            input[i].classList.remove("input_active") 
        } 
    })
}

let regForm = document.querySelector(".register_form")
let logForm = document.querySelector(".login_form")
let regButton = document.querySelector("#regButton")
let logButton = document.querySelector("#logButton")

logButton.addEventListener("click", function  () {
    logForm.classList.add("hideForm")
    regForm.classList.remove("hideForm")
})

regButton.addEventListener("click", function() {
    logForm.classList.remove("hideForm")
    regForm.classList.add("hideForm")
})