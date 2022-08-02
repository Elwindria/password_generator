// All Const

const checkmarks = document.querySelectorAll(".checkmark");
const checkboxs = document.querySelectorAll(".checkbox");

const numbers = document.querySelector("#numbers");
const lowercase = document.querySelector("#lowercase");
const uppercase = document.querySelector("#uppercase");
const special = document.querySelector("#special");


// ============================================
// Hover checkbox start

checkboxs.forEach((box, index) => {
    box.addEventListener("click", ()=>{hoverCheckboxOut(index)})
    box.addEventListener("click", ()=>{hoverCheckbox(index)})
    box.addEventListener("mouseover", ()=>{hoverCheckbox(index)})
    box.addEventListener("mouseout", ()=>{hoverCheckboxOut(index)})
});

// change background color when mouseenter and checked
function hoverCheckbox(index){
    if (checkboxs[index].checked){
        checkmarks[index].style.backgroundColor = "#FEFAF0";
    }
}

// change background color when mouseout, yellow or black if checked => true/false
function hoverCheckboxOut(index){
    if (checkboxs[index].checked){
        checkmarks[index].style.backgroundColor = "#F7DA84";
    } else {
        checkmarks[index].style.backgroundColor = "#1E2528"
    }
}

// hover checkbox stop
//==============================================

