const canvas = document.querySelector("canvas");
canvas.width = 256;
canvas.height = 128;
const ctx = canvas.getContext("2d");
const worker = new Worker("./worker.js");

// createColours calls a web worker and gives it image data to calculate.
// when the web worker returns the data the canvas is updated

createColours();

function createColours() {
  // get canvas data
  let imageData = ctx.getImageData(0, 0, 256, 128);
  // pass data to web worker
  worker.postMessage({ imageData });
  // web worker returns data
  worker.addEventListener("message", (e) => {
    // update canvas with data
    ctx.putImageData(e.data.imageData, 0, 0);
  });
}
