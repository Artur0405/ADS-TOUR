document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalGallery = document.getElementById("modal-gallery");
  const closeModal = document.getElementById("close-modal");

  const placeCards = document.querySelectorAll(".place-card");

  placeCards.forEach(card => {
    const img = card.querySelector("img");

    card.addEventListener("click", () => {
      if (!img) return;

      const title = img.getAttribute("data-title");
      const description = img.getAttribute("data-description");
      const gallery = JSON.parse(img.getAttribute("data-gallery"));

      modalTitle.textContent = title;
      modalDescription.textContent = description;
      modalGallery.innerHTML = "";

      gallery.forEach(src => {
        const modalImg = document.createElement("img");
        modalImg.src = src;
        modalImg.alt = title;
        modalGallery.appendChild(modalImg);
      });

      modal.style.display = "block";
    });
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
