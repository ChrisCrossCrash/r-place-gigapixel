// import sharp
import sharp from 'sharp'

// Tile size: 1840 * 1380
// Tiles: 15 * 15
// Total size: 27600 * 20700 = 571 megapixels

sharp('merged.png', { limitInputPixels: false })
  .tile({
    size: 3072 / 8,
  })
  .toFile('rplace', (err, info) => {
    if (err) {
      console.log(err)
    } else {
      console.log(info)
    }
  })
