const toggleLabel = document.querySelector(".toggle__label");
const toggleButton = document.querySelector(".toggle__checkbox");
toggleLabel.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    toggleButton.checked = !toggleButton.checked;
  }
});
