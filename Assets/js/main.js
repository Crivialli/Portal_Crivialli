document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("popup-overlay");
  const buttons = document.querySelectorAll(".btn[data-popup]");
  const closeButtons = document.querySelectorAll(".close-button");

  // Função para abrir popup
  function showPopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
      popup.classList.remove("popup-hidden");
      overlay.classList.add("active");
      popup.setAttribute("aria-hidden", "false");
    }
  }

  // Função para fechar popup
  function hidePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
      popup.classList.add("popup-hidden");
      overlay.classList.remove("active");
      popup.setAttribute("aria-hidden", "true");
    }
  }

  // Função para alternar popup (abrir/fechar)
  function togglePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (!popup) return;

    if (popup.classList.contains("popup-hidden")) {
      showPopup(popupId);
    } else {
      hidePopup(popupId);
    }
  }

  // Abrir/Fechar popup ao clicar nos botões (toggle)
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const popupId = btn.getAttribute("data-popup");
      togglePopup(popupId);
    });
  });

  // Fechar popup ao clicar no botão fechar (X)
  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const popup = btn.closest(".popup");
      hidePopup(popup.id);
    });
  });

  // Fechar popup clicando no overlay
  overlay.addEventListener("click", () => {
    const openPopups = document.querySelectorAll(".popup:not(.popup-hidden)");
    openPopups.forEach(popup => hidePopup(popup.id));
  });

});
