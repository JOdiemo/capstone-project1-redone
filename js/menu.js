// eslint-disable-next-line no-unused-vars
function showMenu() {
  document.querySelector('.navigation').classList.toggle('active');
  document.querySelector('.menu-overlay').classList.toggle('active');
  document.querySelector('.menu').classList.toggle('active');
}

const allActive = document.querySelectorAll('.active');
// eslint-disable-next-line no-unused-vars
function hideMenu() {
  allActive.forEach((element) => document.classList.remove(element));
}
