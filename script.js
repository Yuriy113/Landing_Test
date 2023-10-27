const nav_mobile = document.querySelector('.nav_mobile');
const burger = document.querySelector('.burger');
const close = document.querySelector('.close');
const popup = document.querySelector('.popup');
const actions = document.querySelectorAll('.contacts-btn');
const shadow = document.querySelector('.popup_shadow');

burger.addEventListener('click', () => {
  nav_mobile.style.display = 'block';
});

close.addEventListener('click', () => {
  nav_mobile.style.display = 'none';
});

for (let action of actions) {
  action.addEventListener('click', () => {
    shadow.style.display = 'block';
    popup.style.display = 'block';
    console.log('first');
  });
}

shadow.addEventListener('click', () => {
  shadow.style.display = 'none';
  popup.style.display = 'none';
});
