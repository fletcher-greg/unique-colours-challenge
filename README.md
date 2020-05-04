# Unique Colours Challenge

You can see the running application [here](https://unique-colours.netlify.app/).

# Tech Used

- HTML Canvas
- Web worker

# Key Information

### Canvas

The Canvas's dimensions are 256x128. Each pixel's colour is unique.

### Web Worker

A web worker is calculating the image data. By utilizing the web worker for computing the algorithm it means that the main thread will not be blocked by any potential long calculations.

If a web worker was not used and the image was much larger (perhaps _1920x1080_) then the pixel calculations could potentially block the main thread and cause the site to freeze momentarily.

Web workers are supported by all modern browsers and can reduce janky animations by taking potentially expensive code off the main thread.

# Instructions

- See it live [here](https://unique-colours.netlify.app/)
- Alternatively git clone repo and run index.html on a local server
