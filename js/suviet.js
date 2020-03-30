

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none ";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// function tongle hidden menu ngang  monitor nho hon 1024px

function openNav() {
    document.getElementById("mySidebar").style.right = "0";
    // document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("mySidebar").style.opacity = "1";
  }
  function closeNav() {
    document.getElementById("mySidebar").style.right = "-100%";
    // document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("mySidebar").style.opacity = "0";
  }

window.onscroll = function() {
  scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").style.backgroundColor = "#000000";
    document.getElementById(navbar).style.height="150px";
  } else {
    document.getElementById("navbar").style.backgroundColor = "rgba(0,0,0,0.001)";
    document.getElementById(navbar).style.height="100px";
    // document.getElementsByClassName("nav-hidden-item").style.marginTop = "50px";
  }
}

function toggleMenu(){
  var element= document.getElementById("toggle1");
  console.log(element);
  element.classList.toggle("click");
}

///

function openContact1(){
  var ex = document.getElementById("changeText1");
  ex.classList.toggle("test");
}
function openContact2(){
  var ex = document.getElementById("changeText2");
  ex.classList.toggle("test");
}
function openContact3(){
  var ex = document.getElementById("changeText3");
  ex.classList.toggle("test");
}
function openContact4(){
  var ex = document.getElementById("changeText4");
  ex.classList.toggle("test");
}

function tonglevideo(){
  var video = document.getElementById("videoBG");
  if (video.paused) {
    video.play();
    video.style.muted
    // btn.innerHTML = "Pause";
  } else {
    video.pause();
    // btn.innerHTML = "Play";
  }
}
