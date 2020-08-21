let btn = document.getElementById("myBtn")

let modal = document.getElementById("projectModal")



$("#resume").on("click", function() {
    window.open("https://drive.google.com/file/d/1DY2Te_Y7N8syEMzCduqbtdSzj7tNWFWI/view?usp=sharing", "_blank");
})



$(".project").on("click", function(){
  modal.style.display = "block";
    
  if(this.id == "calendarApp"){
      $("#repo").attr("href", "https://github.com/paynejoshua/Calendar")
      $("#repo").attr("target", "_blank")
      $("#deployed").attr("href", "https://paynejoshua.github.io/Calendar/")
      $("#deployed").attr("target", "_blank")
    }

    else if(this.id == "pwdGen") {
      $("#repo").attr("href", "https://github.com/paynejoshua/Password-Generator")
      $("#repo").attr("target", "_blank")
      $("#deployed").attr("href", "https://paynejoshua.github.io/Password-Generator/")
      $("#deployed").attr("target", "_blank")
    }

    else{
      $("#repo").attr("href", "https://github.com/paynejoshua/PetStarter")
      $("#repo").attr("target", "_blank")
      $("#deployed").attr("href", "https://paynejoshua.github.io/PetStarter/")
      $("#deployed").attr("target", "_blank")
    }
})

$("#close").on("click", function(){
   modal.style.display = "none"
})

window.onclick = function(event){
    if(event.target == modal) {
        modal.style.display = "none"
    }
}


