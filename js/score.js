let home_score = 0;
let guest_score = 0;
let btn1 = document.querySelector('#btn-1');
let btn2 = document.querySelector('#btn-2');

function addOne() {
  home_score += 1;
  document.getElementById('home-score').textContent = home_score;
}

function addOneToGuest() {
  guest_score += 1;
  document.getElementById('guest-score').textContent = guest_score;
}

function addTwo() {
  home_score = home_score + 2;
  document.getElementById('home-score').textContent = home_score;
}
function addTwoToGuest() {
  guest_score = guest_score + 2;
  document.getElementById('guest-score').textContent = guest_score;
}

function addThree() {
  home_score = home_score + 3;
  document.getElementById('home-score').textContent = home_score;
}

function addThreeToGuest() {
  guest_score += 3;
  document.getElementById('guest-score').textContent = guest_score;
}
