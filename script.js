// Generate grid
function grid() {
  for(var i=0; i<n*n;i++) {
    var div = document.createElement('div');
    div.className = "box";
    div.style.width = 700/n + "px";
    div.style.height = 750/n + "px";
    div.style.opacity = "0.0"
    div.style.background ="#111";
    container.appendChild(div);
  }
}
//Classic effect
function classic() {
  let boxes = document.querySelectorAll("div.box");
    boxes.forEach(box => {
      box.addEventListener('mouseover', function(e){
         e.target.style.opacity = 1;

      })
    });
}
// Greyscale hover effect
function grey(){
  let boxes = document.querySelectorAll("div.box")
    boxes.forEach(box => {
      box.addEventListener('mouseover', function(e){
         e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.1;
      })
    });
}
// Colorful hover effect
function rainbow(){
  let boxes = document.querySelectorAll("div.box")
    boxes.forEach(box => {
      box.addEventListener('mouseover', function(e){
        e.target.style.opacity = 1;
        e.target.style.background = "rgb("+randomRGB()+","+randomRGB()+","+randomRGB()+")";
      })
    });
}
// Random number
function randomRGB(){
  return Math.floor(Math.random() * Math.floor(255));
}
// Remove all boxes(container's all child)
function clear() {
  var child = container.lastElementChild;
  while (child){
    container.removeChild(child);
    child = container.lastElementChild;
  }
}
// Change to classic effect
let classicButton = document.querySelector("button#classic");
classicButton.addEventListener('click', function (e){
  clear();
  grid();
  classic();
});
// Change to colorful effect
let rgbButton = document.querySelector("button#rgb");
rgbButton.addEventListener('click', function(e){
  clear();
  grid();
  rainbow();
});
// Change to greyscale effect
let gsButton = document.querySelector("button#gs");
gsButton.addEventListener('click', function(e){
  clear();
  grid();
  grey();
});
//Change grid size (Max=64)
let changeGridButton = document.querySelector("button#changeGrid");
changeGridButton.addEventListener('click', function(e){
    n = prompt('Enter new grid size(Maximum = 64).');
    if(n>64){
      n=64;
    }
    clear();
    grid();
    classic();
});
//Reset grid
let clearButton = document.querySelector("button#clear");
clearButton.addEventListener('click', function(e){
  clear();
  grid();
  classic();
});
//Calling functions
const container = document.getElementById("container");
let n=16;
grid();
classic();
