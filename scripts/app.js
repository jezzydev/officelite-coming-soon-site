const textDateElem = document.querySelector('.text-date');
const daysNumElem = document.querySelector('.countdown-card.days .num');
const hoursNumElem = document.querySelector('.countdown-card.hours .num');
const minutesNumElem = document.querySelector('.countdown-card.minutes .num');
const secondsNumElem = document.querySelector('.countdown-card.seconds .num');

const today = new Date();
const futureDate = new Date(today);
const daysToAdd = 30;
futureDate.setDate(futureDate.getDate() + daysToAdd); //30 days from today
futureDate.setHours(9, 0, 0, 0); //at 9:00 am

let futureDateStr = futureDate.toDateString().slice(4).toUpperCase();
textDateElem.innerText = futureDateStr.slice(4, 6) + " " + futureDateStr.slice(0, 3) + " " + futureDateStr.slice(-4);

setInterval(() => {
    const now = new Date();
    //get diff in milliseconds
    const distance = futureDate.getTime() - now.getTime();
    const msInADay = 24 * 60 * 60 * 1000;
    const msInAnHour = 60 * 60 * 1000;
    const msInAMin = 60 * 1000;
    const msInASec = 1000;
    const days = Math.floor(distance / msInADay);
    const hours = Math.floor((distance % msInADay) / msInAnHour);
    const minutes = Math.floor((distance % msInAnHour) / msInAMin);
    const seconds = Math.floor((distance % msInAMin) / msInASec);

    daysNumElem.innerText = days;
    hoursNumElem.innerText = hours;
    minutesNumElem.innerText = minutes;
    secondsNumElem.innerText = seconds;
}, 1000);
