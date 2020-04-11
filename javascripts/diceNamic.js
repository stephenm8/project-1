//jshint esversion: 7
let rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
};

let controller = () => {
  let target,
    die1,
    die2,
    rollCount = 0,
    message,
    die1URL,
    die2URL,
    imgElem1,
    imgElem2;

  target = document.querySelector("input").value;

  do {
    die1 = rollDie();
    die2 = rollDie();
    rollCount += 1;

    console.log(`d1=${die1} d2=${die2} count=${rollCount}`);
  } while (die1 + die2 != target);

  die1URL = `images/die${die1}.gif`;
  imgElem1 = document.querySelector("img");
  imgElem1.setAttribute("src", die1URL);

  die2URL = `images/die${die2}.gif`;
  imgElem2 = document.querySelectorAll("img")[1];
  imgElem2.setAttribute("src", die2URL);

  message = `You hit your number in ${rollCount} roll${
    rollCount == 1 ? "" : "s"
  }`;
  document.querySelector("div").innerHTML = message;
};

window.addEventListener("load", () => {
  let button = document.querySelector("button");

  button.addEventListener("click", controller);
});
