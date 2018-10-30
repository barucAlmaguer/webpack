import smol from '../assets/smol.jpg'
import './css/image_viewer.css'

export default  () => {
  const image = document.createElement('img');
  image.src = smol;

  document.body.appendChild(image);
};
