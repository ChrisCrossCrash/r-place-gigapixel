"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import sharp
const sharp_1 = __importDefault(require("sharp"));
// Tile size: 1840 * 1380
// Tiles: 15 * 15
// Total size: 27600 * 20700 = 571 megapixels
(0, sharp_1.default)('merged.png', { limitInputPixels: false })
    .tile({
    size: 3072 / 8,
})
    .toFile('rplace', (err, info) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(info);
    }
});
