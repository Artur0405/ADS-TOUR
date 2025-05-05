const regionImages = {
    "region-1": "../images/Yerevan_night.webp",
    "region-2": "../images/Yerevan_night.webp",
    "region-3": "../images/Yerevan_night.webp",
    "region-4": "../images/Yerevan_night.webp",
    "region-5": "../images/Yerevan_night.webp",
    "region-6": "../images/Yerevan_day.webp",
    "region-7": "../images/Yerevan_day.webp",
    "region-8": "../images/Yerevan_day.webp",
    "region-9": "../images/Yerevan_day.webp",
    "region-10": "../images/Yerevan_day.webp",
    "region-11": "../images/Yerevan_day.webp"
  };
  
  // Предзагрузка изображений
  Object.values(regionImages).forEach(src => {
    const img = new Image();
    img.src = src;
  });
  
  let currentRegion = null;
  
  function setBackground(imageUrl) {
    if (currentRegion !== imageUrl) {
      document.querySelector("main").style.backgroundImage = `url('${imageUrl}')`;
      currentRegion = imageUrl;
    }
  }
  
  document.getElementById("svg-map").addEventListener("load", function () {
    const svgDoc = this.contentDocument;
  
    Object.keys(regionImages).forEach(regionClass => {
      const region = svgDoc.querySelector(`.${regionClass}`);
      if (region) {
        region.addEventListener("mouseenter", () => {
          setBackground(regionImages[regionClass]);
        });
  
        region.addEventListener("mouseleave", () => {
          setBackground("../images/second_background.jpg");
        });
      } else {
        console.warn(`Region ${regionClass} not found`);
      }
    });
  });
  