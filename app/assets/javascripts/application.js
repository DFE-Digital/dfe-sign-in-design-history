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