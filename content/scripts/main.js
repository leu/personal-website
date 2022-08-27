const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/025.jpg') {
    myImage.setAttribute('src','images/003.jpg');
  } else {
    myImage.setAttribute('src','images/025.jpg');
  }
}

