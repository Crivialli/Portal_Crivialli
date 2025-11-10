document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle-theme");
  const span = document.querySelector("#toggle-theme .Title");

  // Aplica o tema salvo (se houver)
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    if (toggleButton) {
      const icon = toggleButton.querySelector("i");
      if (icon) {
        icon.classList.remove("bi-moon-stars-fill");
        icon.classList.add("bi-sun-fill");
      }
    }
    if (span) {
      span.textContent = "Tema: Claro";
    }
  }

  // Se não existir botão, não tenta adicionar evento (evita erro)
  if (!toggleButton) return;

  toggleButton.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    const icon = toggleButton.querySelector("i");
    if (icon) {
      icon.classList.toggle("bi-moon-stars-fill", !isDark);
      icon.classList.toggle("bi-sun-fill", isDark);
    }
    if (span) {
      span.textContent = isDark ? "Tema: Claro" : "Tema: Escuro";
    }
  });

});
