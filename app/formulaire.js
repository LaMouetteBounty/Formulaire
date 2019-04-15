fname = document.querySelector('#fname');
lname = document.querySelector('#lname');
email = document.querySelector('#mail');
tel = document.querySelector('#tel');
adresse = document.querySelector('#adresse');
cp = document.querySelector('#cp');
ville = document.querySelector('#ville');
console.log("declaration des id")

// function valider() {
//     var x = document.forms["form"]["fname"].value;
//     if (x == "") {
//       alert("Name must be filled out");
//       return false;
//     }
//   }
//   console.log("valide fname")
//   function valider() {
//     var x = document.forms["form"]["lname"].value;
//     if (x == "") {
//       alert("Name must be filled out");
//       return false;
//     }
//   }
//   console.log("valide lname")

//   var email = document.getElementById("mail");

// email.addEventListener("keyup", function () {
//   if(email.validity.typeMismatch) {
//     email.setCustomValidity("J'attend un e-mail, mon cher !.");
//   } else {
//     email.setCustomValidity("");
//   }
// });
// function myFunction() {
//     var x, text;
  
//     // Get the value of the input field with id="numb"
//     x = document.getElementById("fname").value;
  
//     // If x is Not a Number or less than one or greater than 10
//     if (isNaN(x) || x < 1 || x > 10) {
//       text = "Veuillez saisir votre nom";
//     } else {
//       text = "OK";
//     }
//     document.getElementById("demo").innerHTML = text;
//   }

  function myName() {
    var x, text;
  
    // Get the value of the input field with id="numb"
    x = document.getElementById("fname").value;
  
    // If x is Not a Number or less than one or greater than 10
    if (event.keyCode < 46 || event.keyCode > 57) {
        console.log(event.keyCode)
      text = "Veuillez saisir votre nom";
    } else {
      text = "Ok";
    }
    document.querySelector(".txt").innerHTML = text;
  }