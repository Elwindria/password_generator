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

//activation de la génération
buttonGeneratePassword.addEventListener("click", ()=>{generatorPassword()});

function generatorPassword(){

    //rénitialisation de la dernière génération
    messageSuccesCopy.style.display = "none";
    passwordResult.value = "";
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
        passwordResult.value = "Check at least one option";
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

    if (stringToCopy != "New password here" && stringToCopy != "Check at least one option"){
        navigator.clipboard.writeText(stringToCopy);
        messageSuccesCopy.style.display = "unset";
    }
}

// Copy result generator stop
