let x = false;
 var navLinks = document.getElementById("navLinks");
  function showMenu() {
      navLinks.style.right = "0px";
  }
  function hideMenu() {
      navLinks.style.right = "-200px";
  }

function myfun() {
    let username = sessionStorage.getItem('username');

    if (username === null) {
        username = prompt("Please enter your name.");
    }

    if (username != null) {
        document.getElementById("test1").innerHTML = "Hello, " + username +" . Welcome To Tasty Classico!";
        sessionStorage.setItem('username', username);
    } else {
        document.getElementById("noUser").innerHTML = "Welcome, Stranger!";
    }
}

$(document).ready(function(){
var typed = new Typed(".typing", {
    strings: ["Welcome! May the best food find your appetite.","Health Requires Healthy Food.","In The Plate Of Food Entire Universe Is Seen.","Good Food Is The Foundation Of Happiness."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
});





 