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
  "repo": "https://github.com/paynejoshua/Password-Generator",
  "deployed": "https://paynejoshua.github.io/Password-Generator/",
  "img": "public/assets/images/password-generator.jpeg",
  "alt": "password generator image",
  "id": "project2"
},
{
  "name": "Mythos",
  "repo": "https://github.com/wkcodes/Mythos",
  "deployed": "https://myth0s.herokuapp.com",
  "img": "public/assets/images/mythosImage.png",
  "alt": "image for my project 2 website",
  "id": "project3"
},
{
  "name": "Employee-Directory",
  "repo": "https://github.com/paynejoshua/Employee-Directory",
  "deployed": "https://desolate-falls-74318.herokuapp.com/",
  "img": "public/assets/image/EmployeeDirectoryImg.png",
  "alt": "Employee Directory Image",
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
    window.open("https://docs.google.com/document/d/1njO9LcXMDDmRwcjF2THOLddjYfqP65ALpfEJ_u13B1A/edit?usp=sharing", "_blank");
})


$(".project").on("click", function(){

let modal = document.getElementById("projectModal")
  
modal.style.display = "block";
 
  let project = portfolio.projects.find(project => project.id === this.id)
 

  console.log("project", project)

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
