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
  
  const regionLinks = {
    "region-1": "../html/regions/aragatsotn.html",
    "region-2": "../html/regions/ararat.html",
    "region-3": "../html/regions/armavir.html",
    "region-4": "../html/regions/erevan.html",
    "region-5": "../html/regions/gegharkunik.html",
    "region-6": "../html/regions/kotayk.html",
    "region-7": "../html/regions/lori.html",
    "region-8": "../html/regions/shirak.html",
    "region-9": "../html/regions/syunik.html",
    "region-10": "../html/regions/tavush.html",
    "region-11": "../html/regions/vayots_dzor.html"
  };
  
  // Предзагрузка всех изображений
  Object.values(regionImages).forEach(src => {
    const img = new Image();
    img.src = src;
  });
  const defaultImage = "../images/second_background.jpg";
  const bg1 = document.getElementById("bg1");
  const bg2 = document.getElementById("bg2");
  let visibleLayer = bg1;
  let hiddenLayer = bg2;
  let currentImage = "";
  let resetTimer = null;
  
  function fadeToImage(imageUrl) {
    if (imageUrl === currentImage) return;
    currentImage = imageUrl;
  
    hiddenLayer.style.backgroundImage = `url('${imageUrl}')`;
  
    // Активировать скрытый слой
    hiddenLayer.classList.add("active");
    visibleLayer.classList.remove("active");
  
    // Поменять местами
    [visibleLayer, hiddenLayer] = [hiddenLayer, visibleLayer];
  }
  
  document.getElementById("svg-map").addEventListener("load", function () {
    const svgDoc = this.contentDocument;
  
    Object.keys(regionImages).forEach(regionClass => {
      const region = svgDoc.querySelector(`.${regionClass}`);
      if (region) {
        region.addEventListener("mouseenter", () => {
          clearTimeout(resetTimer);
          fadeToImage(regionImages[regionClass]);
        });
  
        region.addEventListener("mouseleave", () => {
          resetTimer = setTimeout(() => {
            fadeToImage(defaultImage);
          }, 2000);
        });
  
        if (regionLinks[regionClass]) {
          region.addEventListener("click", () => {
            window.location.href = regionLinks[regionClass];
          });
        }
      }
    });
  });
  
  // Установить стартовый фон
  fadeToImage(defaultImage);
  