document.getElementById("formulaire").addEventListener("submit", function(e) {

    e.preventDefault();
    console.log("declaration document - ligne 4");
    var erreur;


    var inputs = this.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++ ) {
        if (!inputs[i].value) {
            erreur = "Veuillez renseigner tout les champs";
        }
    }

    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {
alert('Formulaire envoyé !');
    }
});
console.log("message d'erreur et validation - ligne 23");

// *****************************************************************************************

document.getElementById("fname").addEventListener("blur", myFunction);
function myFunction() {
  alert("Input field lost focus.");
}

document.getElementById("lname").addEventListener("blur", myFunction);
function myFunction() {
  alert("Input field lost focus.");
}

document.getElementById("email").addEventListener("blur", myFunction);
function myFunction() {
  alert("Input field lost focus.");
}

document.getElementById("tel").addEventListener("blur", myFunction);
function myFunction() {
  alert("Input field lost focus.");
}

document.getElementById("adresse").addEventListener("blur", myFunction);
function myFunction() {
  alert("Input field lost focus.");
}

document.getElementById("cp").addEventListener("blur", myFunction);
function myFunction() {
  alert("Input field lost focus.");
}

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
//   ************************************************************************************