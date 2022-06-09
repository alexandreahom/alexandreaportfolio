import { projectData } from "./project-data.js"

const cardContainer = document.getElementById("card-container")


let projectDataMarkup = projectData.map(project =>
  `
  <div class="card" style="width: 18rem;">
  <img src="${project.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${project.title}</h5>
      <p class="card-text">${project.description}</p>
      <div>
        <a href="${project.github}" class="btn btn-primary">Github</a>
        <a href="${project.deployment}" class="btn btn-secondary">Deployment</a>
      </div>
    </div>
  </div> 
  
  `
  ).join('')

  cardContainer.innerHTML = projectDataMarkup
 
 let contactTitle = document.querySelector('.contactTitle')
 let contactPage = document.querySelector('.contactPage')
 
 contactTitle.addEventListener('click', contactClick)

function contactClick() {
    contactPage.scrollIntoView()
}

let aboutMe = document.querySelector('.aboutMe')
let aboutMePage = document.querySelector('.about')

aboutMe.addEventListener('click', aboutClick)

function aboutClick() {
  aboutMePage.scrollIntoView()
}

let workBtn = document.querySelector('.myWork')
let workPage = document.querySelector('.cards')

workBtn.addEventListener('click', workClick)

function workClick() {
  workPage.scrollIntoView()
}

let resumeBtn = document.querySelector('.resume')
let resumePage = document.querySelector('.resumePage')

resumeBtn.addEventListener('click', resumeClick)

function resumeClick() {
  resumePage.scrollIntoView()
}