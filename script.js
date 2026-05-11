function showMessage(){
  alert("whassap Buddys");
}
function toggleMode(){
  document.body.classList.toggle("dark");
}

const text = "Assalmualikum,  pyare islamic bhai";

let index = 0;

function typeEffect(){

  if(index < text.length){

    document.getElementById("typing").innerHTML += text.charAt(index);

    index++;

    setTimeout(typeEffect,100);
  }
}

typeEffect();


