const skillsArray = [
  {
    skillName: "HTML",
    experience: "2013",
    type: "frontend",
  },
  {
    skillName: "CSS",
    experience: "2013",
    type: "frontend",
  },
  {
    skillName: "Javascript",
    experience: "2013",
    type: "frontend",
  },
  {
    skillName: "React",
    experience: "2016",
    type: "frontend",
  },
  {
    skillName: "Redux",
    experience: "2017",
    type: "frontend",
  },
  {
    skillName: "React Testing Library",
    experience: "2020",
    type: "frontend",
  },
  {
    skillName: "Node.js",
    experience: "2020",
    type: "backend",
  },
  {
    skillName: "Express.js",
    experience: "2020",
    type: "backend",
  },
  {
    skillName: "Mongodb",
    experience: "2020",
    type: "backend",
  },
];

const skillsContainer = document.querySelector(".skills .skills__list");

const addSkill = (skillName, experience, type) => {
  const experienceYears = new Date().getFullYear() - parseFloat(experience);

  const skill = `
    <li class="skills__item" data-name="${skillName}" data-type="${type}">
      <h2 class="skills__title">${skillName}</h2>
      <span class="skills__years">${experienceYears} years</span>
    </li>
  `;

  return skill;
};

const skillsElements = skillsArray
  .map(({ skillName, experience, type }) => addSkill(skillName, experience, type)).join("");

skillsContainer.appendChild(document.createRange().createContextualFragment(skillsElements));

const filterButtons = document.querySelectorAll(".skills__filters button");

filterButtons.forEach((btn) => btn.addEventListener("click", () => {
  filterButtons.forEach((filterBtn) => {
    filterBtn.classList.remove("skills__button--isActive");
    skillsContainer.classList.remove(filterBtn.dataset.type);
  });
  btn.classList.toggle("skills__button--isActive");
  skillsContainer.classList.add(btn.dataset.type);
}));
