function showMessage(){
  alert("Hello Husain");
}

function toggleMode(){
  document.body.classList.toggle("dark");
}

/* typing effect */
let text = "Hi, I'm Husain";
let i = 0;

function typing(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}

typing();