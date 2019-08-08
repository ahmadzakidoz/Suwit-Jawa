const playButton = document.querySelector(".btn-play");
const home = document.querySelector(".home");
const game = document.querySelector(".game");
const hasil = document.querySelector(".hasil");
const batu = document.querySelector(".batu");
const gunting = document.querySelector(".gunting");
const kertas = document.querySelector(".kertas");
const you = document.querySelector(".you");
const comp = document.querySelector(".comp");
const result = document.querySelector(".result");
const again = document.querySelector(".again");
const exit = document.querySelector(".exit");

playButton.addEventListener("click", function() {
  home.classList.toggle("hidden");
  game.classList.toggle("hidden");
});

// Player Memilih
batu.addEventListener("click", function() {
  game.classList.toggle("hidden");
  hasil.classList.toggle("hidden");
  again.classList.toggle("hidden");
  exit.classList.toggle("hidden");

  you.innerHTML = "<h2>You</h2><h1>Batu</h1>";

  // Comp Memilih Random
  let compHand = Math.random();
  if (compHand < 0.34) {
    comp.innerHTML = "<h2>Computer</h2><h1>Batu</h1>";
    result.innerHTML = "Draw";
  } else if (compHand > 0.34 && compHand < 0.67) {
    comp.innerHTML = "<h2>Computer</h2><h1>Gunting</h1>";
    result.innerHTML = "Win";
  } else {
    comp.innerHTML = "<h2>Computer</h2><h1>Kertas</h1>";
    result.innerHTML = "Lose";
  }
});

gunting.addEventListener("click", function() {
  game.classList.toggle("hidden");
  hasil.classList.toggle("hidden");
  again.classList.toggle("hidden");
  exit.classList.toggle("hidden");

  you.innerHTML = "<h2>You</h2><h1>Gunting</h1>";

  // Comp Memilih Random
  let compHand = Math.random();
  if (compHand < 0.34) {
    comp.innerHTML = "<h2>Computer</h2><h1>Batu</h1>";
    result.innerHTML = "Lose";
  } else if (compHand > 0.34 && compHand < 0.67) {
    comp.innerHTML = "<h2>Computer</h2><h1>Gunting</h1>";
    result.innerHTML = "Draw";
  } else {
    comp.innerHTML = "<h2>Computer</h2><h1>Kertas</h1>";
    result.innerHTML = "Win";
  }
});

kertas.addEventListener("click", function() {
  game.classList.toggle("hidden");
  hasil.classList.toggle("hidden");
  again.classList.toggle("hidden");
  exit.classList.toggle("hidden");

  you.innerHTML = "<h2>You</h2><h1>Kertas</h1>";

  // Comp Memilih Random
  let compHand = Math.random();
  if (compHand < 0.34) {
    comp.innerHTML = "<h2>Computer</h2><h1>Batu</h1>";
    result.innerHTML = "Win";
  } else if (compHand > 0.34 && compHand < 0.67) {
    comp.innerHTML = "<h2>Computer</h2><h1>Gunting</h1>";
    result.innerHTML = "Lose";
  } else {
    comp.innerHTML = "<h2>Computer</h2><h1>Kertas</h1>";
    result.innerHTML = "Seri";
  }
});

again.addEventListener("click", function() {
  game.classList.toggle("hidden");
  hasil.classList.toggle("hidden");
  again.classList.toggle("hidden");
  exit.classList.toggle("hidden");

  compHand = null;
});

exit.addEventListener("click", function() {
  home.classList.toggle("hidden");
  hasil.classList.toggle("hidden");
  again.classList.toggle("hidden");
  exit.classList.toggle("hidden");

  compHand = null;
});
