document.addEventListener("DOMContentLoaded", async function () {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  var body = document.querySelector("body");
  body.style.transition = "all 5s";
  colors = [
    "seagreen",
    "aqua",
    "Chartreuse",
    "pink",
    "grey",
    "blue",
    "green",
    "maroon",
    "orange",
    "bisque",
    "CornflowerBlue",
    "Coral",
    "DarkSalmon",
    "GoldenRod",
    "LightBlue",
    "LightGreen",
    "MediumPurple",
    "MediumVioletRed",
    "PaleGreen",
    "Sienna",
    "Wheat",
    "Yellow",
  ];

  async function color_change() {
    for (i = 0; i < colors.length; i++) {
      body.style.backgroundColor = colors[i];
      console.log(i, colors[i]);
      await sleep(15000);
    }
  }

  color_change();
  setInterval(color_change, 15000 * (colors.length + 1));

 
  
});
