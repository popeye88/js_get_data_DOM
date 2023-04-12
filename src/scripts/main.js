'use strict';

const items = document.querySelectorAll('.population');
const populations = [...items].map(item => +item.innerText.replaceAll(',', ''));
const total = populations.reduce((prev, curr) => prev + curr, 0);
const avarega = total / populations.length;

document.querySelector('.total-population').textContent = total;
document.querySelector('.average-population').textContent = avarega;
