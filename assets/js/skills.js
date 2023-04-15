const education = document.getElementById("education");
const educationSkill = document.querySelector(".education-skill");

const languages = document.getElementById("languages");
const languagesSkill = document.querySelector(".languages-skill");

const professional = document.getElementById("professionalSkills");
const professionalSkill = document.querySelector(".professional-skill");

const hobbies = document.getElementById("hobbies");
const hobbiesSkill = document.querySelector(".hobbies-skill");


const az = document.getElementById("az-bar")
const tr = document.getElementById("tr-bar")
const en = document.getElementById("en-bar")
const tl = document.getElementById("tl-bar")
const ru = document.getElementById("ru-bar")


const html = document.getElementById("html-bar")
const css = document.getElementById("css-bar")
const js = document.getElementById("js-bar")
const react = document.getElementById("react-bar")


function add() {
  az.classList.add("az-bar")
  tr.classList.add("tr-bar")
  en.classList.add("en-bar")
  tl.classList.add("tl-bar")
  ru.classList.add("ru-bar")
}

function remove() {
  az.classList.remove("az-bar")
  tr.classList.remove("tr-bar")
  en.classList.remove("en-bar")
  tl.classList.remove("tl-bar")
  ru.classList.remove("ru-bar")
}

function addPro() {
  html.classList.add("html-bar")
  css.classList.add("css-bar")
  js.classList.add("js-bar")
  react.classList.add("react-bar")
}

function removePro() {
  html.classList.remove("html-bar")
  css.classList.remove("css-bar")
  js.classList.remove("js-bar")
  react.classList.remove("react-bar")
}

education.addEventListener("click", () => {
  languagesSkill.classList.remove("visible");
  professionalSkill.classList.remove("visible");
  hobbiesSkill.classList.remove("visible");
  educationSkill.classList.add("visible");
  remove()
  removePro()
});

languages.addEventListener("click", () => {
  educationSkill.classList.remove("visible");
  professionalSkill.classList.remove("visible");
  hobbiesSkill.classList.remove("visible");
  languagesSkill.classList.add("visible");
  add()
  removePro()
});


professional.addEventListener("click", () => {
  languagesSkill.classList.remove("visible");
  educationSkill.classList.remove("visible");
  hobbiesSkill.classList.remove("visible");
  professionalSkill.classList.add("visible");
  remove()
  addPro()
});


hobbies.addEventListener("click", () => {
  languagesSkill.classList.remove("visible");
  educationSkill.classList.remove("visible");
  professionalSkill.classList.remove("visible");
  hobbiesSkill.classList.add("visible");
  remove()
  removePro()
});