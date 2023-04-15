const changeText = document.getElementById("change-text");

let myArray = ["Front-end Developer", "Programmer", "Software Engineer", "JavaScript Developer", "The Horniest Guy You Can Ever See"];

function typeText(text) {
  return new Promise((resolve) => {
    let i = 0;
    const intervalId = setInterval(() => {
      changeText.innerHTML = text.slice(0, i) + '|';
      i++;
      if (i > text.length) {
        clearInterval(intervalId);
        setTimeout(() => {
          resolve();
        }, 1000);
      }
    }, 100);
  });
}

function deleteText(text) {
  return new Promise((resolve) => {
    let i = text.length;
    const intervalId = setInterval(() => {
      changeText.innerHTML = text.slice(0, i) + '|';
      i--;
      if (i < 0) {
        clearInterval(intervalId);
        setTimeout(() => {
          resolve();
        }, 1000);
      }
    }, 100);
  });
}

async function change(n = myArray.length) {
  let i = 0;
  while (true) {
    await typeText(myArray[i % myArray.length]);
    await deleteText(myArray[i % myArray.length]);
    i++;
    if (i === n) {
      i = 0;
    }
  }
}
window.onload = () => {
  change(Infinity)
}