let range = document.querySelector('.slider');
let rangeNum = document.querySelector('.range-num');
const sliderSize = 381;
const buttonSize = 21;

range.oninput = function () {

	let minValue = Number(range.getAttribute('min'));
	let maxValue = Number(range.getAttribute('max'));

	let step = (sliderSize - 59) / (maxValue - minValue);

	let value = Number(this.value);

	rangeNum.style.left = String(value * step )  + 'px';
	rangeNum.innerHTML = this.value;

}
