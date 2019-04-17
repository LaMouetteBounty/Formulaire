document.getElementById("formulaire").addEventListener("submit", function (e) {

    e.preventDefault();
    console.log("declaration document - ligne 4");
    var erreur;

    if (!ville.value) {
        if (validVille != true){
        erreur = "Veuillez saisir votre ville";
        console.log("if ville");
    }
}
    if (!cp.value) {
        if (validCp != true) {
        erreur = "Veuillez saisir votre code postal";
        console.log("if code postal");
    }
}
    if (!adresse.value) {
        if (validAdresse != true) {
        erreur = "Veuillez saisir votre adresse";
        console.log("if adresse");
    }
}
    if (!tel.value) {
        if (validTel != true) {
        erreur = "Veuillez saisir votre numero de téléphone";
        console.log("if telephone");
    }
}
    if (!email.value) {
        if (validEmail != true) {
        erreur = "Veuillez saisir votre email";
        console.log("if email");
    }
}
    if (!lname.value) {
        if (validLname != true){
        erreur = "Veuillez saisir votre prénom";
        console.log("if last name");
    }
}
    if (!fname.value) {
        if (validFname != true) {
            erreur = "Veuillez saisir votre nom";
        console.log("if first name");
        }
        
    }
    // *************************************VALIDATION FORMULAIRE*******************************
    // if (validFname == true && validLname == true && validEmail == true && validTel == true && validAdresse == true && validCp == true && validVille == true) {
    //     e.preventDefault();
    //     alert('Formulaire envoyé !');
        
    // } 
    // else (erreur !=true); {
    //     e.preventDefault();
    //     alert('Formulaire incomplet !');
    //     // break;
    // }
// ********************************MARCHE PAAAAAAAAAAAAS**************************
    // if (validFname != true && validLname != true && validEmail != true && validTel != true && validAdresse != true && validCp != true && validVille != true) {
    //     e.preventDefault();
    //     alert('Formulaire incomplet !');
        
    // } 
    // else (validFname === true && validLname === true && validEmail === true && validTel === true && validAdresse === true && validCp === true && validVille === true); {
    //     e.preventDefault();
        
    //     alert('Formulaire envoyé !');
    //     // break;
    // }
// *******************************************
    //     if (erreur === true ) {
    //     e.preventDefault();
    //     alert('Formulaire envoyé !');
        
    // } 
    // else (erreur !=true); {
    //     e.preventDefault();
    //     alert('Formulaire incomplet !');
    //     // break;
    // }
// ***********************ON TOUCHE AU BUT, IL EST 11H57 *********************
    // if (validFname == true && validLname == true && validEmail == true && validTel == true && validAdresse == true && validCp == true && validVille == true) {
    //     e.preventDefault();
    //     alert('Formulaire envoyé !');
        
    // } 
    // else (validFname == false && validLname == false && validEmail == false && validTel == false && validAdresse == false && validCp == false && validVille == false); {
    //     e.preventDefault();
    //     alert('Formulaire incomplet !');
    //     // break;
    // }
    // ************************CA MARCHE TOUJOURS PAS ET IL EST MIDI***************************
    if (validFname == true && validLname == true && validEmail == true && validTel == true && validAdresse == true && validCp == true && validVille == true) {
        e.preventDefault();
        alert('Formulaire envoyé !');
        
    } 
    if (validFname == false && validLname == false && validEmail == false && validTel == false && validAdresse == false && validCp == false && validVille == false); {
        e.preventDefault();
        alert('Formulaire incomplet !');
        // break;
    }
});
console.log("message d'erreur et validation - ligne 23");

// ***********RegExp***************************CHIFFRE UNIQUEMENT***************************************************
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

//   *************RegExp***************************LETTRE UNIQUEMENT**********************************
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
// *********************************************BLUR**********************************************************

errorFname = document.querySelector('#errorfname');
errorLname = document.querySelector('#errorlname');
errorEmail = document.querySelector('#erroremail');
errorTel = document.querySelector('#errortel');
errorEdresse = document.querySelector('#erroradresse');
errorCp = document.querySelector('#errorcp');
errorVille = document.querySelector('#errorville');
errorMessage = document.querySelector('#errormessage');

console.log("declarations variables error")

// ***********************************ERROR NAME***************************
fname.addEventListener('blur', erreurFname)


var validFname;
function erreurFname() {
    var letters = ("[A-Za-z'àáâãäåçèéêëìíîïðòóôõöùúûüýÿ -]");
    console.log("variable lettre uniquement");
    if (document.querySelector('#fname').value.match(letters)) {
        errorFname.innerHTML = "";
        event.target.style.borderColor = "#99ff66";
        validFname = true;
        return true;
    } else if (document.querySelector('#fname') == "") {
        // errorFname = "Veuillez saisir votre nom";
        event.target.style.borderColor = "#ff0000";
        return false;
    } else {
        // (alert("Veuillez saisir un nom valide"));
        // errorFname = "Veuillez saisir un nom valide";
        event.target.style.borderColor = "#ff0000";
        return false;
    }
}
// ***********************************ERROR LastName***************************

lname.addEventListener('blur', erreurLname)
var validLname;
function erreurLname() {
    var letters = ("[A-Za-z'àáâãäåçèéêëìíîïðòóôõöùúûüýÿ -]");
    console.log("varibale lettre uniquement");
    if (document.querySelector('#lname').value.match(letters)) {
        errorFname.innerHTML = "";
        event.target.style.borderColor = "#99ff66";
        validLname = true;
        return true;
    } else if (document.querySelector('#lname') == "") {
        // (alert("Veuillez saisir votre prénom"));
        // erreur = "Veuillez saisir votre prénom";
        event.target.style.borderColor = "#ff0000";
        return false;
    } else {
        // erreur = "Veuillez saisir un prénom valide";
        event.target.style.borderColor = "#ff0000";
        return false;
    }
}
// ***********************************ERROR EMAIL****************************

email.addEventListener('blur', erreurEmail)
var validEmail;
function erreurEmail() {
    var emails = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;;
    console.log("variable email uniquement");
    if (document.querySelector('#email').value.match(emails)) {
        errorEmail.innerHTML = "";
        event.target.style.borderColor = "#99ff66";
        validEmail = true;
        return true;
    } else if (document.querySelector('#email') == "") {
        // (alert("Veuillez saisir votre email"));
        // erreur = "Veuillez saisir votre adresse email";
        event.target.style.borderColor = "#ff0000";
        return false;
    } else {
        // (alert("Veuillez saisir une adresse email valide"));
        // erreur = "Veuillez saisir une adresse email valide";
        event.target.style.borderColor = "#ff0000";
        return false;
    }
}

// ***********************************ERROR TEL***************************
tel.addEventListener('blur', erreurTel)
var validTel;
function erreurTel() {
    var numbers = ("^(01|02|03|04|05|06|07|09)[0-9 ]");
    console.log("variable chiffre uniquement");
    if (document.querySelector('#tel').value.match(numbers)) {
        errorTel.innerHTML = "";
        event.target.style.borderColor = "#99ff66";
        validTel = true;
        return true;
    } else if (document.querySelector('#tel') == "") {
        // (alert("Veuillez saisir votre numero de téléphone"));
        // erreur = "Veuillez saisir votre numéro de téléphone";
        event.target.style.borderColor = "#ff0000";
        return false;
    } else {
        // (alert("Veuillez saisir un numero de téléphone valide"));
        // erreur = "Veuillez saisir un numéro de téléphone valide";
        event.target.style.borderColor = "#ff0000";
        return false;
    }
}

// ***********************************ERROR Adresse***************************

adresse.addEventListener('blur', erreurAdresse)
var validAdresse;
function erreurAdresse() {
    var lettersandnumb = ("[A-Za-z'àáâãäåçèéêëìíîïðòóôõöùúûüýÿ 0-9 -]");
    console.log("varibale lettres et chiffres uniquement");
    if (document.querySelector('#adresse').value.match(lettersandnumb)) {
        // errorAdresse.innerHTML = "";
        event.target.style.borderColor = "#99ff66";
        validAdresse = true;
        return true;
    } else if (document.querySelector('#adresse') == "") {
        // (alert("Veuillez saisir votre adresse"));
        // erreur = "Veuillez saisir votre adresse";
        event.target.style.borderColor = "#ff0000";
        return false;
    } else {
        // (alert("Veuillez saisir une adresse valide"));
        // erreur = "Veuillez saisir une adresse valide";
        event.target.style.borderColor = "#ff0000";
        return false;
    }
}

// ***********************************ERROR code postal***************************
cp.addEventListener('blur', erreurCp)
var validCp;
function erreurCp() {
    var numbers = ("[0-9]{5}");
    console.log("variable chiffre uniquement");
    if (document.querySelector('#cp').value.match(numbers)) {
        errorCp.innerHTML = "";
        event.target.style.borderColor = "#99ff66";
        validCp = true;
        return true;
    } else if (document.querySelector('#cp') == "") {
        // (alert("Veuillez saisir votre code postal"));
        event.target.style.borderColor = "#ff0000";
        return false;
    } else {
        event.target.style.borderColor = "#ff0000";
        return false;
    }
}
// ***********************************ERROR Ville***************************
ville.addEventListener('blur', erreurVille)
var validVille;
function erreurVille() {
    var letters = ("[A-Za-z'àáâãäåçèéêëìíîïðòóôõöùúûüýÿ]");
    console.log("varibale lettre uniquement");
    if (document.querySelector('#ville').value.match(letters)) {
        errorVille.innerHTML = "";
        event.target.style.borderColor = "#99ff66";
        validVille = true;
        return true;
    } else if (document.querySelector('#ville') == "") {
        // (alert("Veuillez saisir votre ville"));
        // erreur = "Veuillez saisir votre ville";
        event.target.style.borderColor = "#ff0000";
        return false;
    } else {
        // (alert("Veuillez saisir une ville valide"));
        // erreur = "Veuillez saisir une ville valide";
        event.target.style.borderColor = "#ff0000";
        return false;
    }
}

// ***********************************ERROR Message***************************
message.addEventListener('blur', erreurMessage)

function erreurMessage() {
    var caracteremsg = ("[A-Za-z'àáâãäåçèéêëìíîïðòóôõöùúûüýÿ 0-9.;,!/:?*^¨$'()+ -]");
    console.log("varibale pour caractere error message");
    if (document.querySelector('#message').value.match(caracteremsg)) {
        errorMessage.innerHTML = "";
        event.target.style.borderColor = "#99ff66";
        return true;
    } else if (document.querySelector('#message') == "") {
        // (alert("Veuillez saisir un message"));
        // erreur = "Veuillez saisir votre message";
        event.target.style.borderColor = "#ff0000";
        return false;
    } else {
        // (alert("Veuillez saisir un message valide"));
        // erreur = "Veuillez saisir un message valide";
        event.target.style.borderColor = "#ff0000";
        return false;
    }
}
// **********************************************************
// document.getElementById("formulaire").addEventListener("submit", function (e) {

//     e.preventDefault();
//     console.log("declaration document - ligne 4");
//     var erreur;
//     if (erreur) {
//         e.preventDefault();
//         // document.getElementById("erreur").innerHTML = erreur;
//         document.querySelector('#errorfname').innerHTML = erreur;
//         return false;
//     } else {
//         alert('Formulaire envoyé !');
//     }
// });