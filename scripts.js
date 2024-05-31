document.addEventListener("DOMContentLoaded", () => {
  const openModalBtn = document.getElementById("openModalBtn");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const modal = document.getElementById("accessibleModal");

  openModalBtn.addEventListener("click", () => {
    modal.setAttribute("aria-hidden", "false");
    modal.style.display = "block";
    closeModalBtn.focus();
  });

  closeModalBtn.addEventListener("click", () => {
    modal.setAttribute("aria-hidden", "true");
    modal.style.display = "none";
    openModalBtn.focus();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
      modal.setAttribute("aria-hidden", "true");
      modal.style.display = "none";
      openModalBtn.focus();
    }
  });

  const openDialogBtn = document.getElementById("openDialogBtn");
  const closeDialogBtn = document.getElementById("closeDialogBtn");
  const dialog = document.getElementById("accessibleDialog");

  openDialogBtn.addEventListener("click", () => {
    dialog.showModal();
    closeDialogBtn.focus();
  });

  closeDialogBtn.addEventListener("click", () => {
    dialog.close();
    openDialogBtn.focus();
  });

  dialog.addEventListener("cancel", () => {
    openDialogBtn.focus();
  });

  const menuButton = document.getElementById("menuButton");
  const menuContent = document.getElementById("menuContent");

  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", !isExpanded);
    menuContent.hidden = isExpanded;
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !menuContent.hidden) {
      menuContent.hidden = true;
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.focus();
    }
  });
});
