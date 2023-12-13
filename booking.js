/********* create variables *********/
let dailyRate = 35; // Default full-day rate
let selectedDays = [];
const calculatedCostElement = document.getElementById('calculated-cost');

/********* colour change days of week *********/
function toggleDay(element, cost) {
    if (element.classList.contains('clicked')) {
        // Day is already selected, remove it
        element.classList.remove('clicked');
        selectedDays = selectedDays.filter(day => day !== element.innerText);
    } else {
        // Day is not selected, add it
        element.classList.add('clicked');
        selectedDays.push(element.innerText);
    }

    calculateCost();
}

/********* clear days *********/
function clearDays() {
    document.querySelectorAll('.day').forEach(day => day.classList.remove('clicked'));
    selectedDays = [];
    calculateCost();
}

/********* change rate *********/
function changeToHalfDay() {
    dailyRate = 20; // Set the rate to half-day
    document.querySelector('.half').classList.add('clicked');
    document.querySelector('.full').classList.remove('clicked');
    calculateCost();
}

function changeToFullDay() {
    dailyRate = 35; // Set the rate back to full-day
    document.querySelector('.half').classList.remove('clicked');
    document.querySelector('.full').classList.add('clicked');
    calculateCost();
}

/********* calculate *********/
function calculateCost() {
    const totalCost = selectedDays.length * dailyRate;
    calculatedCostElement.innerHTML = `My weekly cost will be: $${totalCost}`;
}

