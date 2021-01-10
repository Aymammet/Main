document.addEventListener("DOMContentLoaded", async function () {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  var body = document.querySelector("body");
  body.style.transition = "all 1s";
  colors = ["seagreen","pink", "grey", "blue", "green", "maroon", "orange"];

  
  async function color_change() {
    for (i = 0; i < colors.length; i++) {
      body.style.backgroundColor = colors[i];
      console.log(colors[i]);
      await sleep(3000);
    }
  }

  color_change();
  setInterval(color_change, 3000*(colors.length + 1));
});
