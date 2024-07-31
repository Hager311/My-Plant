var btn = document.getElementById('treeButton');
btn.addEventListener("click", function(){
  document.getElementById('boxt').classList.toggle("open-boxt");
});

function toggleCLass() {
   var myBoxClasses = document.getElementsByClassName('boxt').classList;
   if (myBoxClasses.contains("box-scale")) {
       myBoxClasses.remove("box-scale");
   } else {
       myBoxClasses.add("box-scale");
   }
}
var btn = document.getElementById('sunButton');
btn.addEventListener("click", function(){
  document.getElementById('boxs').classList.toggle("open-boxs");
});

function toggleCLass() {
   var myBoxClasses = document.getElementsByClassName('boxs').classList;
   if (myBoxClasses.contains("box-scale")) {
       myBoxClasses.remove("box-scale");
   } else {
       myBoxClasses.add("box-scale");
   }
}
var btn = document.getElementById('winterButton');
btn.addEventListener("click", function(){
  document.getElementById('boxw').classList.toggle("open-boxw");
});

function toggleCLass() {
   var myBoxClasses = document.getElementsByClassName('boxw').classList;
   if (myBoxClasses.contains("box-scale")) {
       myBoxClasses.remove("box-scale");
   } else {
       myBoxClasses.add("box-scale");
   }
}
var btn = document.getElementById('flowerButton');
btn.addEventListener("click", function(){
  document.getElementById('boxf').classList.toggle("open-boxf");
});

function toggleCLass() {
   var myBoxClasses = document.getElementsByClassName('boxf').classList;
   if (myBoxClasses.contains("box-scale")) {
       myBoxClasses.remove("box-scale");
   } else {
       myBoxClasses.add("box-scale");
   }
}