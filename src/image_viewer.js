import big from '../assets/big.jpg'
import smol from '../assets/smol.jpg'
import './css/image_viewer.css'

const image = document.createElement('img');
image.src = smol;

document.body.appendChild(image);

const bigImage = document.createElement('img');
bigImage.src = big;

document.body.appendChild(bigImage);