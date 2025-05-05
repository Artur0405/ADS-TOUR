const tours = [
  {
    title: "5-Day Tour",
    description: "5-day tour to the picturesque regions of Armenia",
    image: "../images/tour1.jpg",
    details: `Experience an unforgettable 5-day adventure through Armenia, where ancient
              history, vibrant culture, and stunning natural beauty come together. This
              carefully curated tour takes you from the bustling streets of Yerevan to sacred
              monasteries, dramatic mountain fortresses, and serene lakes, offering a
              perfect blend of guided exploration, culinary delights, and breathtaking
              landscapes. Immerse yourself in Armenia’s rich heritage, from UNESCO-listed
              sites to local markets and wineries, creating memories that will last a lifetime.`
    ,
    gallery: [
      "../images/tour1_1.jpg",
      "../images/tour1_2.jpg",
      "../images/tour1_3.jpg"
    ]
  },
  {
    title: "7-Day Tour",
    description: "7-day tour to the picturesque regions of Armenia",
    image: "../images/tour2.jpg",
    details: `Journey through Armenia on this captivating 7-day tour, blending timeless
              history, vibrant traditions, and inspiring scenery. From the dynamic energy of
              Yerevan to ancient monasteries perched in dramatic landscapes that unveil
              Armenia’s soul. Wander through Gyumri’s artistic streets, sip wines in Areni’s
              vineyards, and marvel at sacred sites framed by majestic mountains, all
              paired with authentic culinary delights. This immersive experience invites you
              to connect deeply with Armenia’s cultural tapestry and natural wonders,
              creating memories to cherish.
`,
    gallery: [
      "../images/tour2_1.jpg",
      "../images/tour2_2.jpg"
    ]
  },
  {
    title: "10-Day Tour",
    description: "10-day tour to the picturesque regions of Armenia",
    image: "../images/tour3.jpg",
    details: `Set out on an extraordinary 10-day journey through Armenia, where ancient
              legacies, vibrant culture, and stunning landscapes come together to form a
              mesmerizing tapestry. This all-encompassing tour takes you deep into the
              heart of the country—from the lively avenues of Yerevan to tranquil
              monasteries, majestic fortresses, and crystal-clear mountain lakes. Explore
              UNESCO World Heritage sites, taste exceptional Armenian wines, stroll
              through Gyumri’s creative soul, and discover hidden wonders like
              underground cave networks and historic carpet workshops. Combined with
              unforgettable culinary moments, this adventure promises an intimate
              encounter with Armenia’s rich history and breathtaking beauty.
`,
    gallery: [
      "../images/tour3_1.jpg",
      "../images/tour3_2.jpg",
      "../images/tour3_3.jpg"
    ]
  }
];

const container = document.getElementById("tours-container");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalGallery = document.getElementById("modal-gallery");
const closeModal = document.getElementById("close-modal");
const moreBtn = document.getElementById("modal-more-button");

// Закрытие модального окна
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Создание карточек туров
tours.forEach(tour => {
  const section = document.createElement("section");
  section.className = "tour";

  section.innerHTML = `
    <img src="${tour.image}" alt="${tour.title}" />
    <h2>${tour.title}</h2>
    <p>${tour.description}</p>
  `;

  // Открытие модального окна при клике на карточку
  section.addEventListener("click", () => {
    modalTitle.textContent = tour.title;
    modalDescription.textContent = tour.details;
    modalGallery.innerHTML = "";

    tour.gallery.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = tour.title;
      modalGallery.appendChild(img);
    });

    moreBtn.onclick = () => {
      window.location.href = `tour.html?tour=${encodeURIComponent(tour.title)}`;
    };

    modal.style.display = "flex";
  });

  container.appendChild(section);
});

// Гарантия скрытия модалки при загрузке
window.addEventListener("DOMContentLoaded", () => {
  modal.style.display = "none";
});
