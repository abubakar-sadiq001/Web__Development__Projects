// Starting

const navMenu = document.querySelector('.menu-cover');
const sideBar = document.querySelector('.side-bar');
const backdrop = document.querySelector('.backdrop');
const Menu1 = document.querySelector('.line1');
const Menu2 = document.querySelector('.line2');
const Menu3 = document.querySelector('.line3');


navMenu.addEventListener("click", open);

function open() {
    console.log('clicked');
    sideBar.style.display = 'block';
    backdropToggler();
}

function backdropToggler() {
    backdrop.style.display = 'block';
}
backdrop.addEventListener("click", close);
function close() {
        backdrop.style.display = 'none';
        sideBar.style.display = 'none';
}
// blog Read More
let readMore = document.querySelector('.read-more');
let showTexts = document.querySelector('.continuation');
readMore.addEventListener("click", showText);

function showText() {
    showTexts.style.display = 'block';
    readMore.textContent = 'Read Less';
}