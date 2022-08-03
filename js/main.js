// All Const

const checkmarks = document.querySelectorAll(".checkmark");
const checkboxs = document.querySelectorAll(".checkbox");

const numbers = document.querySelector("#numbers");
const lowercase = document.querySelector("#lowercase");
const uppercase = document.querySelector("#uppercase");
const special = document.querySelector("#special");


// ============================================
// Hover checkbox start

// initialisation addEvent pour les checkbox
checkboxs.forEach((box, index) => {
    box.addEventListener("click", ()=>{hoverCheckboxOut(index)})
    box.addEventListener("click", ()=>{hoverCheckbox(index)})
    box.addEventListener("mouseover", ()=>{hoverCheckbox(index)})
    box.addEventListener("mouseout", ()=>{hoverCheckboxOut(index)})
});

// Hover
function hoverCheckbox(index){
    if (checkboxs[index].checked){
        checkmarks[index].style.backgroundColor = "#FEFAF0";
    }
}

// Hover off
function hoverCheckboxOut(index){
    if (checkboxs[index].checked){
        checkmarks[index].style.backgroundColor = "#F7DA84";
    } else {
        checkmarks[index].style.backgroundColor = "#1E2528"
    }
}

// hover checkbox stop
//==============================================
// animation input range start

const range = document.querySelector("#range_sliders");
const HTMLvalue = document.querySelector("#value");

range.addEventListener("input", ()=>{handleInputChange()})

function handleInputChange(){
    var value = range.value;
    var max = range.max;
    var min = range.min;

    range.style.backgroundSize = (value - min) * 100 / (max - min) + '% 100%';
    HTMLvalue.textContent = value;
}
// animation input range stop
// =======================================
// Generator Password start ! 

// Utilisation des const All
const buttonGeneratePassword = document.querySelector("#button_generate");
const passwordResult = document.querySelector("#password_input");
const messageSuccesCopy = document.querySelector("#div_succes");
const messageSuccesCopyP = document.querySelector("#succes");

//activation de la génération
buttonGeneratePassword.addEventListener("click", ()=>{generatorPassword()});

function generatorPassword(){

    //rénitialisation de la dernière génération
    messageSuccesCopyP.textContent = "Successfully copied !"
    messageSuccesCopy.style.opacity = "0";
    passwordResult.value = "New password here";
    var result = "";
    var characters = "";

    //initialisation de la longueur du mot de passe
    var lengthPassword = range.value;

    //Initialisation des options
    if (numbers.checked){
        var characters = characters+"0123456789";
    }
    if (lowercase.checked){
        var characters = characters+"abcdefghijklmnopqrstuvwxyz";
    }
    if (uppercase.checked){
        var characters = characters+"ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (special.checked){
        var characters = characters+"!#$%&()*+,-./:;<=>?@[]^_`{|}~";
    }

    //Si aucune option choisi alors envoyer un message
    if (!numbers.checked && !lowercase.checked && !uppercase.checked && !special.checked) {
        messageSuccesCopyP.textContent = "Check at least one option";
        messageSuccesCopy.style.opacity = "1";
        return;
    }

    var charactersLength = characters.length;

    //création du mot de passe
    for ( var i = 0; i < lengthPassword; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    //affichage de la génération
    passwordResult.value = result;
}

//generator Password stop
//=======================================
// Copy result generator start

const buttonCopy = document.querySelector("#button_copy");

buttonCopy.addEventListener("click", ()=>{copy()});

function copy(){

    //initialisation du string à copier
    var stringToCopy = passwordResult.value;

    if (stringToCopy != "New password here"){
        navigator.clipboard.writeText(stringToCopy);
        messageSuccesCopy.style;opacity = "1";
    }
}

// Copy result generator stop
