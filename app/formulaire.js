document.getElementById("formulaire").addEventListener("submit", function(e) {

    e.preventDefault();
    console.log("declaration document - ligne 4");
    var erreur;

    if (!ville.value) {
        erreur = "Veuillez saisir votre ville";
        console.log("if ville");
    }

    if (!cp.value) {
        erreur = "Veuillez saisir votre code postal";
        console.log("if code postal");
    }

    if (!adresse.value) {
        erreur = "Veuillez saisir votre adresse";
        console.log("if adresse");
    }

    if (!tel.value) {
        erreur = "Veuillez saisir votre numero de téléphone";
        console.log("if telephone");
    }

    if (!email.value) {
    erreur = "Veuillez saisir votre email";
    console.log("if email");
    }

    if (!lname.value) {
        erreur = "Veuillez saisir votre prénom";
        console.log("if last name");
    }
    if (!fname.value) {
        erreur = "Veuillez saisir votre nom";
        console.log("if first name");
    }

// *****************************************************************************
    // var inputs = this.getElementsByTagName("input");
    // for (var i = 0; i < inputs.length; i++ ) {
    //     if (!inputs[i].value) {
    //         erreur = "Veuillez renseigner tout les champs";
    //     }
    // }
// ********************************************************
    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {
alert('Formulaire envoyé !');
    }
});
console.log("message d'erreur et validation - ligne 23");

// **************************************CHIFFRE UNIQUEMENT***************************************************
// function verif_nombre(champ)
//   {
// 	var chiffres = new RegExp("[0-9]");
// 	var verif;
// 	var points = 0;
 
// 	for(x = 0; x < champ.value.length; x++)
// 	{
//             verif = chiffres.test(champ.value.charAt(x));
// 	    if(champ.value.charAt(x) == "."){points++;}
//             if(points > 1){verif = false; points = 1;}
//   	    if(verif == false){champ.value = champ.value.substr(0,x) + champ.value.substr(x+1,champ.value.length-x+1); x--;}
// 	}
//   }

//   ****************************************LETTRE UNIQUEMENT**********************************
// function verif_letter(champ)
//   {
// 	var chiffres = new RegExp("[A-Za-z'àáâãäåçèéêëìíîïðòóôõöùúûüýÿ -]");
// 	var verif;
// 	var points = 0;
 
// 	for(x = 0; x < champ.value.length; x++)
// 	{
//             verif = chiffres.test(champ.value.charAt(x));
// 	    if(champ.value.charAt(x) == "."){points++;}
//             if(points > 1){verif = false; points = 1;}
//   	    if(verif == false){champ.value = champ.value.substr(0,x) + champ.value.substr(x+1,champ.value.length-x+1); x--;}   
//     }
//   }
// *********************************************EMAIL*******************************************
// function ValidateEmail(inputText)
// {
// var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// if(inputText.value.match(mailformat))
// {
// document.form1.text1.focus();
// return true;
// }
// else
// {
// alert("You have entered an invalid email address!");
// document.form1.text1.focus();
// return false;
// }
// }
// document.forms["monform"].elements["monchamp"].value
// *********************************************BLUR**********************************************************

errorFname = document.querySelector('#errorfname');
errorLname = document.querySelector('#errorlname');
errorEmail = document.querySelector('#erroremail');
errorTel = document.querySelector('#errortel');
errorEdresse = document.querySelector('#erroradresse');
errorCp = document.querySelector('#errorcp');
errorVille = document.querySelector('#errorville');
errorMessage = document.querySelector('#errormessage');

console.log ("declarations variables error")

// ***********************************ERROR NAME***************************
fname.addEventListener('blur', erreurFname)

function erreurFname(){
var letters = ("[A-Za-z'àáâãäåçèéêëìíîïðòóôõöùúûüýÿ -]"); 
console.log("variable lettre uniquement");
if(document.querySelector('#fname').value.match(letters)) {
errorFname.innerHTML = "";
event.target.style.background = "green";
return true;
} else if(document.querySelector('#fname') == "") {
    (alert("Veuillez saisir votre nom"));
    event.target.style.background = "red"; 
return false;
} else{
    (alert("Veuillez saisir un nom valide"));
    event.target.style.background = "red";
return false;
}
}
// ***********************************ERROR LastName***************************

lname.addEventListener('blur', erreurLname)

function erreurLname(){
var letters = ("[A-Za-z'àáâãäåçèéêëìíîïðòóôõöùúûüýÿ -]"); 
console.log("varibale lettre uniquement");
if(document.querySelector('#lname').value.match(letters)) {
errorFname.innerHTML = "";
event.target.style.background = "green";
return true;
} else if(document.querySelector('#lname') == "") {
    (alert("Veuillez saisir votre prénom"));
    event.target.style.background = "red"; 
return false;
} else{
    (alert("Veuillez saisir un prénom valide"));
    event.target.style.background = "red";
return false;
}
}
// ***********************************ERROR EMAIL****************************

email.addEventListener('blur', erreurEmail)

function erreurEmail(){
var emails = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;; 
console.log("variable email uniquement");
if(document.querySelector('#email').value.match(emails)) {
errorEmail.innerHTML = "";
event.target.style.background = "green";
return true;
} else if(document.querySelector('#email') == "") {
    (alert("Veuillez saisir votre email"));
    event.target.style.background = "red"; 
return false;
} else{
    (alert("Veuillez saisir une adresse email valide"));
    event.target.style.background = "red";
return false;
}
}

// ***********************************ERROR TEL***************************
tel.addEventListener('blur', erreurTel)

function erreurTel(){
var numbers = ("[0-9]"); 
console.log("variable chiffre uniquement");
if(document.querySelector('#tel').value.match(numbers)) {
errorTel.innerHTML = "";
event.target.style.background = "green";
return true;
} else if(document.querySelector('#tel') == "") {
    (alert("Veuillez saisir votre numero de téléphone"));
    event.target.style.background = "red"; 
return false;
} else{
    (alert("Veuillez saisir un numero de téléphone valide"));
    event.target.style.background = "red";
return false;
}
}

// ***********************************ERROR Adresse***************************

adresse.addEventListener('blur', erreurAdresse)

function erreurAdresse(){
var lettersandnumb = ("[A-Za-z'àáâãäåçèéêëìíîïðòóôõöùúûüýÿ 0-9 -]"); 
console.log("varibale lettres et chiffres uniquement");
if(document.querySelector('#adresse').value.match(lettersandnumb)) {
// errorAdresse.innerHTML = "";
event.target.style.background = "green";
return true;
} else if(document.querySelector('#adresse') == "") {
    (alert("Veuillez saisir votre adresse"));
    event.target.style.background = "red"; 
return false;
} else{
    (alert("Veuillez saisir une adresse valide"));
    event.target.style.background = "red";
return false;
}
}

// ***********************************ERROR code postal***************************
cp.addEventListener('blur', erreurCp)

function erreurCp(){
var numbers = ("[0-9]"); 
console.log("variable chiffre uniquement");
if(document.querySelector('#cp').value.match(numbers)) {
errorCp.innerHTML = "";
event.target.style.background = "green";
return true;
} else if(document.querySelector('#cp') == "") {
    (alert("Veuillez saisir votre code postal"));
    event.target.style.background = "red"; 
return false;
} else{
    (alert("Veuillez saisir un code postal valide"));
    event.target.style.background = "red";
return false;
}
}
// ***********************************ERROR Ville***************************
ville.addEventListener('blur', erreurVille)

function erreurVille(){
var letters = ("[A-Za-z'àáâãäåçèéêëìíîïðòóôõöùúûüýÿ 0-9-]"); 
console.log("varibale lettre uniquement");
if(document.querySelector('#ville').value.match(letters)) {
errorVille.innerHTML = "";
event.target.style.background = "green";
return true;
} else if(document.querySelector('#ville') == "") {
    (alert("Veuillez saisir votre ville"));
    event.target.style.background = "red"; 
return false;
} else{
    (alert("Veuillez saisir une ville valide"));
    event.target.style.background = "red";
return false;
}
}

// ***********************************ERROR Message***************************
message.addEventListener('blur', erreurMessage)

function erreurMessage(){
var caracteremsg = ("[A-Za-z'àáâãäåçèéêëìíîïðòóôõöùúûüýÿ 0-9.;,!/:?*^¨$'()+ -]"); 
console.log("varibale pour caractere error message");
if(document.querySelector('#message').value.match(caracteremsg)) {
errorMessage.innerHTML = "";
event.target.style.background = "green";
return true;
} else if(document.querySelector('#message') == "") {
    (alert("Veuillez saisir un message"));
    event.target.style.background = "red"; 
return false;
} else{
    (alert("Veuillez saisir un message valide"));
    event.target.style.background = "red";
return false;
}
}


// var formulaire = document.getElementById("formulaire");
// var verif;
// formulaire.addEventListener("focus", function( event ) {
//   event.target.style.background = "#f2f2f2";    
// }, true);



// formulaire.addEventListener("blur", function( event ) {
//     // if (verif = chiffres.test(champ.value.charAt(x)));
//     (alert("Veuillez saisir votre nom"));
//     console.log("BLUR");
//     event.target.style.background = "red"; 
// }, true);

// document.getElementById("fname").addEventListener("blur", myFunctionfname);
// function myFunctionfname() {
//   alert("Veuillez saisir votre nom");
//   console.log("msg erreur lname");
// }


// document.querySelector("#fname").addEventListener("blur", myFunctionfname);
// console.log("message erreur blur fname line62")
// function myFunctionfname() {
//     if(champ.value.lenght < 2 || champ.value.lenght > 10)
//     {
//         return false;
//     }
//     else {
//         return true;
        
//     }
// }
// console.log("message erreur blur fname line95")

// document.getElementById("lname").addEventListener("blur", myFunctionlname);
// function myFunctionlname() {
//   alert("Veuillez saisir votre prénom");
//   console.log("msg erreur lname");
// }

// document.getElementById("ville").addEventListener("blur", myFunction);
// function myFunction() {
//      // If x is Not a Number or less than one or greater than 10
// if (fname > 0 || fname < Infinity) {
// console.log("Nombre infini okaay")
//   alert("Input field lost focus.");
// }
// else {
//     alert('Formulaire envoyé !');
// }
// ******************************************************************************************
    // var fname = document.getElementById("fname");
    // var lname = document.getElementById("lname");
    // var email = document.getElementById("email");
    // console.log("declaration variable");
    // *************************************************************************************
// var fname = document.getElementById("fname");
//   function fname() {
//     var fname, text;
//     console.log("fname");
//     // Get the value of the input field with id="numb"
//     fname = document.querySelector("#fname").value;
//     // If x is Not a Number or less than one or greater than 10
//     if (fname > 0 || fname < Infinity) {
//         console.log("Nombre infini okaay")
//       text = "Veuillez saisir votre nom";
//     } else {
//       text = "Ok";