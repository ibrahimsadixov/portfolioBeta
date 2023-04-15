const sections = document.querySelectorAll(".section");

sections.forEach(section => {
  section.addEventListener("click", () => {
    sections.forEach(e => e.classList.remove("current"));
    section.classList.add("current");
  });
});
