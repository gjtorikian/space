function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// https://codepen.io/saransh/pen/BKJun

function stars(id, count) {
  let value = `${getRandomInt(0, 8000)}px ${getRandomInt(0, 10000)}px #FFF`
  let opacityRanges = [0.7, 0.8, 0.9, 1.0];
  let opacity = opacityRanges[getRandomInt(0, opacityRanges.length)];
  for (let i = 2; i < count; i++) {
    let weight = getRandomInt(0, 25);
    let lowpass = 0;
    let rgba = "";
    // white
    if (weight >= 1 && weight <= 22) {
      colornum = Math.floor((Math.random() * 255) + 1);
      rgba = "rgba("+ colornum +","+ colornum +","+ colornum +","+ opacity +")";
    }
    // blue
    else if (weight === 23) {
      colornum = Math.floor((Math.random() * 255) + 1);
      rgba = "rgba("+ lowpass +","+ lowpass +","+ colornum +","+ opacity +")";
    }
    // red
    else if (weight === 24) {
      colornum = Math.floor((Math.random() * 255) + 1);
      rgba = "rgba("+ colornum +","+ lowpass +","+ lowpass +","+ opacity +")";
    }
    // green
    else if (weight === 25) {
      colornum = Math.floor((Math.random() * 255) + 1);
      rgba = "rgba("+ lowpass +","+ colornum +","+ lowpass +","+ opacity +")";
    }
    value = `${value} , ${getRandomInt(0, 8000)}px ${getRandomInt(0, 10000)}px ${rgba}`
  }
  document.getElementById(id).style.boxShadow = value;
}

document.addEventListener("DOMContentLoaded", function(event) {
  stars('stars', 18000);
  stars('stars2', 14000);
  stars('stars3', 13000);

  let text = ['by definition',
              'cannot be',
              'another frontier.',
              'It is',
              'infinite boundlessness',
              'defined',
              'by nothing',
              'accidentally',
              'holding pebbles',
              'without',
              'an end.',
              'It is not',
              'conceivably liminal.',
              'It is',
              'and will be',
              'something',
              'that goes on',
              'forever and']

  let container = document.getElementById("title");
  let leftVal = 1000;
  let topVal = 300;
  for (let i = 0; i < text.length; i++) {
    let span = document.createElement("span");
    span.innerHTML = text[i] + `<sub>${i + 2}</sub>`;
    leftVal = getRandomInt(leftVal - 3000, 8000);
    topVal = getRandomInt(topVal - 3000, 9500);
    span.style = `position:absolute;left:${leftVal}px;top:${topVal}px`;
    container.appendChild(span);
  }
});
