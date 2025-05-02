const tours = [
    {
      title: "Tour 1",
      description: "7-day tour to the picturesque regions of Armenia",
      details: "You will visit Yerevan, Lake Sevan, Dilijan, Tatev and enjoy a cultural program with guides.",
      gallery: [
        "../images/tour1_1.jpg",
        "../images/tour1_2.jpg",
        "../images/tour1_3.jpg"
      ]
    },
    {
      title: "Tour 2",
      description: "Get to know traditional Armenian cuisine and wine",
      details: "Immersion in culinary traditions: master classes, tastings, trips to wineries.",
      gallery: [
        "../images/The_Garni_Temple_5.jpg",
        "../images/The_Garni_Temple_5.jpg",
        "../images/The_Garni_Temple_5.jpg",
        "../images/The_Garni_Temple_5.jpg",
        "../images/The_Garni_Temple_5.jpg",
        "../images/The_Garni_Temple_5.jpg",
        "../images/The_Garni_Temple_5.jpg",
        "../images/The_Garni_Temple_5.jpg",
        "../images/tour2_1.jpg",
        "../images/tour2_2.jpg",
        "../images/tour2_1.jpg",
        "../images/tour2_2.jpg",
        "../images/tour2_1.jpg",
        "../images/tour2_2.jpg",
        "../images/tour2_1.jpg",
        "../images/tour2_2.jpg",
        "../images/tour2_1.jpg",
        "../images/tour2_2.jpg",
        "../images/tour2_1.jpg",
        "../images/tour2_2.jpg",
        "../images/tour2_1.jpg",
        "../images/tour2_2.jpg",
        "../images/tour2_1.jpg",
        "../images/tour2_2.jpg",
        "../images/tour2_1.jpg",
        "../images/tour2_2.jpg",
        "../images/tour2_1.jpg",
        "../images/tour2_2.jpg",
        "../images/tour2_1.jpg",
        "../images/tour2_2.jpg",
        "../images/tour2_1.jpg",
        "../images/tour2_2.jpg"
        
      ]
    },
    {
      title: "Tour 3",
      description: "Visiting monasteries, fortresses and ancient monuments",
      details: "You will learn about the history of Armenia, visit Garni, Geghard, Zvartnots and other iconic places.",
      gallery: [
        "../images/tour3_1.jpg",
        "../images/tour3_2.jpg",
        "../images/tour3_3.jpg"
      ]
    }
  ];
  
  // Получаем название тура из URL
  const params = new URLSearchParams(window.location.search);
  const tourName = params.get("tour");
  
  const tour = tours.find(t => t.title === tourName);
  
  if (tour) {
    document.getElementById("tour-title").textContent = tour.title;
    document.getElementById("tour-description").textContent = tour.details;
  
    const gallery = document.getElementById("tour-gallery");
    tour.gallery.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = tour.title;
      gallery.appendChild(img);
    });
  
    document.getElementById("book-button").onclick = () => {
      window.location.href = `reserve.html?tour=${encodeURIComponent(tour.title)}`;
    };
  } else {
    document.body.innerHTML = "<h2>Tour not found</h2>";
  }
  