'use strict';

let bars = document.getElementById('fa-bars-1');

let navItems = document.querySelector('.nav-items');

bars.addEventListener('click', function () {
  navItems.classList.toggle('.active');
});
