"use strict";

const movieEl = document.getElementById("movies");

const selectSeatEl = document.getElementById("selectSeat");

const totalSeatEl = document.getElementById("totalSeat");

const totalCostEl = document.getElementById("totalCost");

// Global variable

let ticketPrice = Number(movieEl.value);
let totalCost = 0;
let totalSeat = 0;

// function

function UpdateCountAndPrice() {
  totalSeatEl.textContent = totalSeat;
  totalCostEl.textContent = totalCost;
}

// Add event listeners

movieEl.addEventListener("change", (e) => {
  ticketPrice = Number(movieEl.value);
});

selectSeatEl.addEventListener("click", (e) => {
  if (e.target.classList.contains("seat")) {
    if (!e.target.classList.contains("occupied")) {
      e.target.classList.toggle("selected");

      totalSeat = document.querySelectorAll(".row .seat.selected").length;

      totalCost = ticketPrice * totalSeat;

      UpdateCountAndPrice();
    }
  }
});