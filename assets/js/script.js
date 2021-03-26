let portfolio = {
  "projects":[
  {
  "name": "Work Day Scheduler",
  "repo": "https://github.com/paynejoshua/Calendar",
  "deployed": "https://paynejoshua.github.io/Work-Day-Scheduler/",
  "img": "public/assets/images/calendar.jpeg",
  "alt": "calendar image",
  "id": "project1",
  "tools": "Tools Used For this Project: HTML, CSS, jQuery, Moment.",
  "role": "Role: Sole project coordinator and developer.",

},
{
  "name": "Password Generator",
  "repo": "https://github.com/paynejoshua/Password-Generator",
  "deployed": "https://paynejoshua.github.io/Password-Generator/",
  "img": "public/assets/images/password-generator.jpeg",
  "alt": "password generator image",
  "id": "project2",
  "tools": "Tools Used For this Project: HTML, CSS, Javascript",
  "role": "Role: Sole project coordinator and developer.",
},
{
  "name": "Mythos",
  "repo": "https://github.com/wkcodes/Mythos",
  "deployed": "https://myth0s.herokuapp.com",
  "img": "public/assets/images/mythosImage.png",
  "alt": "image for my project 2 website",
  "id": "project3",
  "tools": "Tools Used For this Project: HTML, CSS, React, Merge-Images, MySql, Node, Express, Heroku",
  "role": "Role: Developed and designed the Home, Portfolio, and World pages. Created the API routes to render information from our database to the portfolio page of the user who has signed in. Created the avatar maker on the portfolio page. Created the avatar characters and weapons and designed both so that a character and a weapon could be rendered on same image."
},
{
  "name": "Employee-Directory",
  "repo": "https://github.com/paynejoshua/Employee-Directory",
  "deployed": "https://desolate-falls-74318.herokuapp.com/",
  "img": "public/assets/images/EmployeeDirectoryImg.png",
  "alt": "Employee Directory Image",
  "id": "project4",
  "tools": "Tools Used For this Project: HTML, CSS, React, Node, Express, RandomUser, Heroku",
  "role": "Role: Sole project coordinator and developer",
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
    $("#projectTools").text(project.tools)
    $("#projectRole").text(project.role)
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
