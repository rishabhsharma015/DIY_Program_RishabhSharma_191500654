var slideIndex = 0, idx = 0, ico=0;
carousel();
abc();
icons();

function carousel() {
  var i;
  var x = document.getElementsByClassName("stext");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1};
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 1700); // Change text every 2 seconds
}

function abc(){
    var y = document.getElementsByClassName("tech");
    for (i = 0; i < y.length; i++) {
        y[i].style.display = "none";
    }
    idx++;
    if (idx > y.length) {idx = 1};
    y[idx-1].style.display = "block";
    setTimeout(abc, 1700);
}


function icons(){
    var z = document.getElementsByClassName("qicon");
    for (i = 0; i < z.length; i++) {
        z[i].style.display = "none";
    }
    ico++;
    if (ico > z.length) {ico = 1};
    z[ico-1].style.display = "block";
    setTimeout(icons, 1700);
}