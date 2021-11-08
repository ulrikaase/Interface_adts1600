/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

  //Image changer:

  function changeImage() {

    if (document.getElementById("imgClickAndChange").src == "Images/lightOff.png") 
    {
        document.getElementById("imgClickAndChange").src = "Images/lamp-logo-light-bulb-technology-icons-3.png";
    }
    else 
    {
        document.getElementById("imgClickAndChange").src = "Images/lightOff.png";
    }
}

var x = 0;

function changeBackground() {


  if (document.getElementById("buttonBackground").src == "video/night.mp4") 
  {
      document.getElementById("buttonBackground").src = "video/mountain.mp4";
      x = 1;
  }
  else if(x == 1)
  {
    document.getElementById("buttonBackground").src = "video/mountain.mp4";
    x = 2;
  }
  else if(x==2){
    document.getElementById("buttonBackground").src = "video/lofi2.mp4";
    x=3
  }
  else if(x==3){
    document.getElementById("buttonBackground").src = "video/lofi.mp4";
    x=0
  }

  else
  {
      document.getElementById("buttonBackground").src = "video/city.mp4";
      x=1;
  }
}