var menuNames, slideNumber , imgBlocks , dots , plusSlideNumber , currentSlideNumber, topnav, logo, menuIcon, navOption;

// menu function start
menuNames = document.getElementsByClassName("menu-names");
for (let o = 0; o < menuNames.length; o++) {
    const element = menuNames[o];
    element.addEventListener("click" , ()=>{
        for (let n = 0; n < menuNames.length; n++) {
            const i = menuNames[n];
            i.classList.remove('active');
            element.classList.add('active');
        }
    });
}
// menu function end

topnav = document.getElementById('top-nav');
logo = document.getElementById('logo');
menuIcon = document.getElementById("menu-icon");
navOption = document.getElementById("nav-option");
// for menu on small screen
if (window.innerWidth > 300) {
    menuIcon.addEventListener("click" , ()=>{
        if (navOption.style.display.match("block")) { 
           navOption.style.display = "none";
           document.getElementById("menu-bars").classList.remove('change');
          } else {
              navOption.style.display = "block";
              document.getElementById("menu-bars").classList.add('change');
          }
      });    
} else {
    menuIcon.addEventListener("click" , ()=>{
        if (navOption.style.display.match("block")) { 
           navOption.style.display = "none";
          } else {
              navOption.style.display = "block";
          }
      }); 
}

// slider: start
slideNumber = 1;
imgBlocks = document.getElementsByClassName('img-container');
dots = document.getElementsByClassName('dot');

function showImage(x){
    if (x>imgBlocks.length) {
       slideNumber = 1;        
    }
    if (x<1) {
        slideNumber = imgBlocks.length;
    }
    for (let i = 0; i < imgBlocks.length; i++) {
        const j = imgBlocks[i];
        j.style.display = "none"; 
    }
    for (let k = 0; k < dots.length; k++) {
        const l = dots[k];
        l.classList.remove('active-img');
    }
    imgBlocks[slideNumber-1].style.display = 'block';
    dots[slideNumber-1].classList.add('active-img');
}


plusSlideNumber = (x)=>showImage(slideNumber+=x);
currentSlideNumber = (x)=>showImage(slideNumber = x);
showImage(slideNumber);
setInterval(() => {
    document.getElementsByClassName('next')[0].click();
}, 2500);
// slider end
/////modal start
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("modal-img");
var modalImg = document.getElementById("modalImg");
var captionText = document.getElementById("caption");

for (let j = 0; j < img.length; j++) {
    img[j].addEventListener("click" , ()=>{
        modal.style.display = "block";
        modalImg.src = img[j].src;
        captionText.innerHTML = img[j].alt;
    });
}

// Get the <span> element that closes the modal
var span = document.getElementById("close");
span.addEventListener("click" , ()=>{
    modal.style.display = "none";
});

// modal end