const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
  console.log('Hi!')
}

document.body.appendChild(button)