let portfolio = {
  "projects":[
  {
  "name": "Calendar App",
  "repo": "https://github.com/paynejoshua/Calendar",
  "deployed": "https://paynejoshua.github.io/Calendar/",
  "img": "public/assets/images/calendar.jpeg",
  "alt": "calendar image",
  "id": "project1"
},
{
  "name": "Password Generator",
  "repo": "https://paynejoshua.github.io/Password-Generator/",
  "deployed": "https://paynejoshua.github.io/Password-Generator/",
  "img": "public/assets/images/password-generator.jpeg",
  "alt": "password generator image",
  "id": "project2"
},
{
  "name": "Pet Starter",
  "repo": "https://github.com/paynejoshua/PetStarter",
  "deployed": "https://paynejoshua.github.io/PetStarter/",
  "img": "public/assets/images/petStarter.jpeg",
  "alt": "pet starter website image",
  "id": "project3"
},
{
  "name": "Mythos",
  "repo": "https://github.com/wkcodes/Mythos",
  "deployed": "https://myth0s.herokuapp.com/profile",
  "img": "public/assets/images/mythosImage.png",
  "alt": "image for my project 2 website",
  "id": "project4"
}
]
}


$(document).ready(function(){

  
  let projectTemplate = $("#project-template").html()

  let compiledProjectTemplate = Handlebars.compile(projectTemplate)
  console.log(compiledProjectTemplate(portfolio))
  $(".projectContainer").html(compiledProjectTemplate(portfolio))



$("#resume").on("click", function() {
    window.open("https://drive.google.com/file/d/1DY2Te_Y7N8syEMzCduqbtdSzj7tNWFWI/view?usp=sharing", "_blank");
})


$(".project").on("click", function(){

let modal = document.getElementById("projectModal")
  
modal.style.display = "block";

  let project = portfolio.projects.find(project => project.id = this.id)

  console.log(project)

  if (project) {
    console.log($("#repo"))
    $("#repo").attr("href", project.repo)
    $("#repo").attr("target", "_blank")
    $("#deployed").attr("href", project.deployed)
    $("#deployed").attr("target", "_blank")
  }
})

$("#close").on("click", function(){
  let modal = document.getElementById("projectModal")
  modal.style.display = "none"
})

window.onclick = function(event){
  let modal = document.getElementById("projectModal")  
  if(event.target == modal) {
        modal.style.display = "none"
    }
}

})
