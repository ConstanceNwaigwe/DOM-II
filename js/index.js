// Your code goes here


var navstyle = document.querySelectorAll(".nav-link");
console.log(navstyle);

for (var i = 0; i < navstyle.length; i++){
  navstyle[i].addEventListener("click", function(event){
    event.preventDefault()
  });
  //navstyle[i].style.color = "green";
}
//navstyle.addEventListener("mouseover",navstyle.style.color = "black");

var a = document.getElementsByClassName("nav-link");
for(var i = 0; i < a.length; i++){
 a[i].addEventListener("mouseenter", mouseEnter);
 a[i].addEventListener("mouseleave", mouseLeave);
  
}


function mouseEnter() {
  for(var i = 0; i < a.length; i++){
  	a[i].style.color = "red";
  
  }
}

function mouseLeave() {

  for(var i = 0; i < a.length; i++){
  	a[i].style.color = "black";
  
  }
}

//document.getElementsByClassName("img-content").addEventListener("resize", 2);

var h2 = document.getElementsByTagName("h2");
//img.addEventListener("change", );

for (var i = 0; i < a.length; i++){
  console.log(h2[i]);
  h2[i].addEventListener("change", h2fun);
}
function h2fun(){
  var changeh2 = document.getElementsByTagName("h2");
  for (var i = 0; i < a.length; i++){
    //console.log(img[i]);
    changeh2[i].style.fontFamily = "Arial";
  }
}

var footer = document.getElementsByTagName("footer");

//footer.forEach(i => footer[i].addEventListener("scroll", footerfun));

for (var i = 0; i < a.length; i++){
  if(i === 1){
    break;
  }
  console.log(footer[i]);
  footer[i].addEventListener("keypress", footerfun);
}
function footerfun(){
  for (var i = 0; i < a.length; i++){
    if(i === 1){
    break;
  }
    //console.log(img[i]);
    footer[i].style.color = "pink";
  }
}
