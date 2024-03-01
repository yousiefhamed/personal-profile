document.querySelector(".find-out-link").remove();
document.querySelector("img.bio__pic").style.width = "36rem";

const skills = document.querySelectorAll(".skills__item");

const addSkills = (previousSiblingSkillName, newSkillName, experienceYears) => {
  const newSkill = `
    <li class="skills__item" data-name="${newSkillName}">
      <h2 class="skills__title">${newSkillName}</h2>
      <span class="skills__years">${experienceYears} years</span>
    </li>
  `;
  if (previousSiblingSkillName) {
    const previousSiblingSkill = document.querySelector(`.skills__item[data-name="${previousSiblingSkillName}"]`);
    previousSiblingSkill.insertAdjacentHTML("afterend", newSkill);
  } else {
    skills.insertAdjacentHTML("beforeend", newSkill);
  }
};

const updateSkills = (oldSkillName, newSkillName, experienceYears) => {
  const oldSkill = document.querySelector(`.skills__item[data-name="${oldSkillName}"]`);
  oldSkill.dataset.name = newSkillName;
  oldSkill.querySelector("h2").innerHTML = newSkillName;
  if (experienceYears) {
    oldSkill.querySelector("span").innerHTML = `${experienceYears} years`;
  }
};

updateSkills("Redux", "Node.js");
updateSkills("React testing library", "MongoDB");
addSkills("Javascript", "Typescript", 2);

skills.forEach((skill) => {
  skill.addEventListener("click", () => {
    const underlines = document.querySelectorAll(".underline");
    if (underlines.length) {
      underlines.forEach((underline) => underline.classList.remove("underline"));
    }
    skill.classList.toggle("underline");
  });
});
