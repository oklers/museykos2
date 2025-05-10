
// Простейший переключатель языков
const langButtons = document.querySelectorAll("#language-switcher button");

langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Язык переключён на: " + btn.dataset.lang);
    // В полной версии — перерисовать тексты, использовать i18next или свой словарь
  });
});
