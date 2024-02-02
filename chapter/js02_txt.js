function myFunction(){
      var num= document.getElementById("photoNum").value || 0;
      var hrs= document.getElementById("photoHrs").value || 0;
      var book= document.getElementById("makeBook").checked? 350 : 0;
      var rights= document.getElementById("photoRights").checked? 1250 : 0;;
      var dist= document.getElementById("photoDist").value || 0;
      var total= num * + hrs * 100 + book + +rights + dist * 2 * num;
document.getElementById("estimate").innerHTML = "$" + total;
}


document.addEventListener('DOMContentLoaded', function () {
myFunction(); 

document.getElementById("photoNum").addEventListener("input", myFunction);
document.getElementById("photoHrs").addEventListener("input", myFunction);
document.getElementById("makeBook").addEventListener("change", myFunction);
document.getElementById("photoRights").addEventListener("change", myFunction);
document.getElementById("photoDist").addEventListener("input", myFunction);
});