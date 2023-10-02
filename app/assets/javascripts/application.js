//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
})

function showPassword() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function showFilters() {
  var x = document.getElementById("userFilter");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const btn = document.getElementById("show-filter");
btn.addEventListener("click", ()=>{

    if(btn.innerText === "Show filters"){
        btn.innerText = "Hide filters";
    }else{
        btn.innerText= "Show filters";
    }
})

function myFunction() {
  document.getElementById("userFilter").style.minWidth = "200px";
}

const btn2 = document.getElementById("showServices");
btn2.addEventListener("click", ()=>{

    if(btn2.innerText === "Only show users with access to my service"){
        btn2.innerText = "Show all users";
    }else{
        btn2.innerText= "Only show users with access to my service";
    }
})

function showServices() {
  var x = document.getElementById("currentDisplay");
  if (x.innerHTML === "Currently viewing all users of Assessment Service") {
    x.innerHTML = "Currently viewing all users with access to DfE Sign-in";
  } else {
    x.innerHTML = "Currently viewing all users of Assessment Service";
  }
}

const btn3 = document.getElementById("showOrgs");
btn3.addEventListener("click", ()=>{

    if(btn3.innerText === "Only show organisations with access to my service"){
        btn3.innerText = "Show all organisations";
    }else{
        btn3.innerText= "Only show organisations with access to my service";
    }
})

function showOrgs() {
  var x = document.getElementById("currentDisplayOrgs");
  if (x.innerHTML === "Currently viewing organisations with access to Assessment Service") {
    x.innerHTML = "Currently viewing all organisations";
  } else {
    x.innerHTML = "Currently viewing organisations with access to Assessment Service";
  }
}


function removeRow() {
  var x = document.getElementById("conditionPermission");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function removeRow2() {
  var x = document.getElementById("conditionEmail");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function removeRow3() {
  var x = document.getElementById("conditionEstablishment");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function removeRow4() {
  var x = document.getElementById("conditionCategory");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function removeRow5() {
  var x = document.getElementById("conditionID");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function removeRow6() {
  var x = document.getElementById("conditionStatus");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function ShowAndChange() {
  var x = document.getElementById('SectionName');
  if (x.style.display == 'none') {
      x.style.display = 'block';
  } else {
      x.style.display = 'none';
  }
}


var myInput = document.getElementById("password");
var letter = document.getElementById("length-newPassword");
var capital = document.getElementById("upper-case-newPassword");
var number = document.getElementById("numbers-newPassword");
var lowercase = document.getElementById("lower-case-newPassword");

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate password length
  if(myInput.value.length >= 8) {
    letter.classList.remove("icon-remove");
    letter.classList.add("icon-ok");
  } else {
    letter.classList.remove("icon-ok");
    letter.classList.add("icon-remove");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z].*[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("icon-remove");
    capital.classList.add("icon-ok");
  } else {
    capital.classList.remove("icon-ok");
    capital.classList.add("icon-remove");
  }

  // Validate numbers
  var numbers = /[0-9].*[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("icon-remove");
    number.classList.add("icon-ok");
  } else {
    number.classList.remove("icon-ok");
    number.classList.add("icon-remove");
  }

  // Validate lowercase
  var lowerCaseLetters = /[a-z].*[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    lowercase.classList.remove("icon-remove");
    lowercase.classList.add("icon-ok");
  } else {
    lowercase.classList.remove("icon-ok");
    lowercase.classList.add("icon-remove");
  }
}

function confirmPassword() {
  var y = document.getElementById("confirm-password");
    if (y.type === "password") {
      y.type = "text";
    } else {
      y.type = "password";
    }
  }