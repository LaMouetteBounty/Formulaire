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
function verif_nombre(champ)
  {
	var chiffres = new RegExp("[0-9]");
	var verif;
	var points = 0;
 
	for(x = 0; x < champ.value.length; x++)
	{
            verif = chiffres.test(champ.value.charAt(x));
	    if(champ.value.charAt(x) == "."){points++;}
            if(points > 1){verif = false; points = 1;}
  	    if(verif == false){champ.value = champ.value.substr(0,x) + champ.value.substr(x+1,champ.value.length-x+1); x--;}
	}
  }

//   ****************************************LETTRE UNIQUEMENT**********************************
function verif_letter(champ)
  {
	var chiffres = new RegExp("[a-zA-Z]");
	var verif;
	var points = 0;
 
	for(x = 0; x < champ.value.length; x++)
	{
            verif = chiffres.test(champ.value.charAt(x));
	    if(champ.value.charAt(x) == "."){points++;}
            if(points > 1){verif = false; points = 1;}
  	    if(verif == false){champ.value = champ.value.substr(0,x) + champ.value.substr(x+1,champ.value.length-x+1); x--;}
	}
  }
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
// *********************************************BLUR********************[a-zA-Z]**************************************

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

// document.getElementById("email").addEventListener("blur", myFunctionemail);
// function myFunctionemail() {
//   alert("Veuillez saisir votre Email");
//   console.log("msg erreur email");
// }

// document.getElementById("tel").addEventListener("blur", myFunctiontel);
// function myFunctiontel() {
//   alert("Veuillez saisir votre numéros de téléphone");
//   console.log("msg erreur tel");
// }

// document.getElementById("adresse").addEventListener("blur", myFunctionadresse);
// function myFunctionadresse() {
//   alert("Veuillez saisir votre adresse");
//   console.log("msg erreur adresse");
// }

// document.getElementById("cp").addEventListener("blur", myFunctioncp);
// function myFunctioncp() {
//   alert("Veuillez saisir votre code postal");
//   console.log("msg erreur code postal");
// }

// document.getElementById("cp").addEventListener("blur", myFunctionville);
// function myFunctionville() {
//   alert("Veuillez saisir votre code postal");
//   console.log("msg erreur ville");
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
 
    // if (!email.value) {
    //     erreur = "Veuillez saisir votre email";
    //     console.log("if email");
    // }
    // if (!lname.value) {
    //     erreur = "Veuillez saisir votre prénom";
    //     console.log("if last name");
    // }
    // if (!fname.value) {
    //     erreur = "Veuillez saisir votre nom";
    //     console.log("if first name");
    // }
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
      
//     }
//     document.querySelector(".txt").innerHTML = text;
//   }
//   console.log("fname OK")
