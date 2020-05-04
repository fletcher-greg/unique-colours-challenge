const canvas = document.querySelector("canvas");
canvas.width = 256;
canvas.height = 128;
const ctx = canvas.getContext("2d");
const worker = new Worker("./worker.js");

// createColours calls a web worker and gives it image data to calculate.
// web workers do not run on the main thread. This means the calculation will not cause the UI to due to large javascript calculations
// when the web worker returns the data the canvas is updated

createColours();
// event listener

function createColours() {
  // get canvas data
  let imageData = ctx.getImageData(0, 0, 256, 128);
  // pass data to web worker
  worker.postMessage({ imageData });
  // web worker has returned data
  worker.addEventListener("message", (e) => {
    // update canvas with data
    ctx.putImageData(e.data.imageData, 0, 0);
  });
}
