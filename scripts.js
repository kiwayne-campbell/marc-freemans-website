let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("reviewSlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function rotateSlides() {
    setInterval(function(){ 
    plusDivs(1); }, 4000);
}

rotateSlides();


// function transitionMenuBurger() {
//   console.log('click');
//   document.getElementById('marcMicrophoneImage').style.transform = "rotate(90deg)";
//   document.getElementById('marcMicrophoneImage').style.marginTop = "20px;";
//   document.getElementById('marcMenuItems').style.transform = "scale(1.0, 1.0)";
// }