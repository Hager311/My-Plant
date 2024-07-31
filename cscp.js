function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



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