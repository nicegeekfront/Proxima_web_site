
// Services 

const btn1 = document.querySelector('#button_1');
const btn2 = document.querySelector('#button_2');
const btn3 = document.querySelector('#button_3');
const btn4 = document.querySelector('#button_4');
const btn5 = document.querySelector('#button_5');

const con1 = document.querySelector('#content_1');
const con2 = document.querySelector('#content_2');
const con3 = document.querySelector('#content_3');
const con4 = document.querySelector('#content_4');
const con5 = document.querySelector('#content_5');


btn1.onclick = function() {
  con1.classList.add('services__content--active');
  con2.classList.remove('services__content--active');
  con3.classList.remove('services__content--active');
  con4.classList.remove('services__content--active');
  con5.classList.remove('services__content--active');
};
btn2.onclick = function() {
    con2.classList.add('services__content--active');
    con1.classList.remove('services__content--active');
    con3.classList.remove('services__content--active');
    con4.classList.remove('services__content--active');
    con5.classList.remove('services__content--active');
};
btn3.onclick = function() {
    con3.classList.add('services__content--active');
  con1.classList.remove('services__content--active');
  con2.classList.remove('services__content--active');
  con4.classList.remove('services__content--active');
  con5.classList.remove('services__content--active');
};
btn4.onclick = function() {
    con4.classList.add('services__content--active');
  con1.classList.remove('services__content--active');
  con2.classList.remove('services__content--active');
  con3.classList.remove('services__content--active');
  con5.classList.remove('services__content--active');
};
btn5.onclick = function() {
    con5.classList.add('services__content--active');
  con1.classList.remove('services__content--active');
  con2.classList.remove('services__content--active');
  con3.classList.remove('services__content--active');
  con4.classList.remove('services__content--active');
};

