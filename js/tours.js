const tours = [
  {
    title: "Tour 1",
    description: "7-day tour to the picturesque regions of Armenia",
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
    title: "Tour 2",
    description: "Get to know traditional Armenian cuisine and wine",
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
    title: "Tour 3",
    description: "Visiting monasteries, fortresses and ancient monuments",
    image: "../images/tour3.jpg",
    details: "You will learn about the history of Armenia, visit Garni, Geghard, Zvartnots and other iconic places.",
    gallery: [
      "../images/tour3_1.jpg",
      "../images/tour3_2.jpg",
      "../images/tour3_3.jpg"
    ]
  },
  {
    title: "Tour 3",
    description: "Visiting monasteries, fortresses and ancient monuments",
    image: "../images/tour3.jpg",
    details: "You will learn about the history of Armenia, visit Garni, Geghard, Zvartnots and other iconic places.",
    gallery: [
      "../images/tour3_1.jpg",
      "../images/tour3_2.jpg",
      "../images/tour3_3.jpg"
    ]
  },
  {
    title: "Tour 3",
    description: "Visiting monasteries, fortresses and ancient monuments",
    image: "../images/tour3.jpg",
    details: "You will learn about the history of Armenia, visit Garni, Geghard, Zvartnots and other iconic places.",
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
