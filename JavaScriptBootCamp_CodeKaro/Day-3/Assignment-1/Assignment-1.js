
function getRandomColor() {
    let color = '#';
    for (let i = 0; i < 6; i++) {
      const randomValue = Math.random() * 16;
      const hexValue = Math.floor(randomValue).toString(16);
      color += hexValue;
    }
    return color;
  }

  function changeBackgroundColor() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
  }

  document.onclick = changeBackgroundColor;

  console.log(getRandomColor());
