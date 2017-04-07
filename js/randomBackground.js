  //random images url container
  var images = [
    "url('./img/solar-panel-array-power-plant-electricity-power-159160.jpeg')",
    "url('./img/hill-2165759_1920.jpg')",
    "url('./img/tianjin-2185510_1920.jpg')"
  ];
  
  var random_image = Math.floor(images.length * Math.random());
  document.body.style.backgroundImage = images[random_image];