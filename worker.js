self.addEventListener("message", (e) => {
  let colors = colourCalc(e.data.imageData);
  postMessage({ imageData: colors });
});

function colourCalc(imageData) {
  let index = 0;

  for (let y = 0; y < 128; y += 1) {
    for (let x = 0; x < 256; x += 1) {
      imageData.data[index] = x & 0xff;
      imageData.data[index + 1] = (y >> 8) & 0xff;
      imageData.data[index + 2] = y & 0xff;
      imageData.data[index + 3] = 255;
      index += 4;
    }
  }

  return imageData;
}
