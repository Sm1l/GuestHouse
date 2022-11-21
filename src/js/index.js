"use strict";
//* slider--------------------------------
let position = 0;
const slidesToShow = 2;
const slidesToScroll = 1;
const container = document.querySelector("#guests-slider-container");
const track = document.querySelector("#guests-slider-track");
const items = document.querySelectorAll(".card-guest");
const btnPrev = document.querySelector("#guests-btn-prev");
const btnNext = document.querySelector("#guests-btn-next");
const itemWidth = container.clientWidth / slidesToShow;
const itemsCount = items.length;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
  item.style.minWidth = `${itemWidth - 20}px`;
});

btnPrev.addEventListener("click", (evt) => {
  evt.preventDefault();
  const itemsLeft = Math.abs(position) / itemWidth;
  position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition();
  checkBtns();
});

btnNext.addEventListener("click", (evt) => {
  evt.preventDefault();
  const itemsLeft = (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
  position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition();
  checkBtns();
});

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();
