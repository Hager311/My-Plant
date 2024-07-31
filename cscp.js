var btn = document.getElementById('treeButton');
btn.addEventListener("click", function(){
  document.getElementById('box').classList.toggle("open-boxt");
});

function toggleCLass() {
   var myBoxClasses = document.getElementsByClassName('box').classList;
   if (myBoxClasses.contains("box-scale")) {
       myBoxClasses.remove("box-scale");
   } else {
       myBoxClasses.add("box-scale");
   }
}