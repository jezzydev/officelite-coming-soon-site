# Frontend Mentor - Officelite coming soon site solution

This is a solution to the [Officelite coming soon site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/officelite-coming-soon-site-M4DIPNz8g). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See error states when the contact form is submitted if:
  - The `Name` and/or `Email Address` fields are empty
  - The `Email Address` is not formatted correctly
- **Bonus**: See a live countdown timer that ticks down every second
- **Bonus**: See a custom-styled `select` form control in the sign-up form

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/officelite-coming-soon-site-with-countdown-timer-5quYYox45l)
- Live Site URL: [Officelite Coming Soon](https://jezzydev.github.io/officelite-coming-soon-site/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

I learned how to customize the <select> element using CSS pseudo-elements and how to make a countdown timer in JavaScript.

Customize <select> Element:

```css
select,
::picker(select) {
  appearance: base-select;
}

select::picker-icon {
  transition: 0.4s rotate;
}

select::picker-icon:popover-open {
  rotate: 180deg;
}

::picker(select) {
  border: none;
  top: calc(anchor(bottom) + 1px);
}

option:checked {
  color: var(--color-blue-500);
  font-weight: 700;
}
```

Countdown Timer:

```js
const textDateElem = document.querySelector(".text-date");
const daysNumElem = document.querySelector(".countdown-card.days .num");
const hoursNumElem = document.querySelector(".countdown-card.hours .num");
const minutesNumElem = document.querySelector(".countdown-card.minutes .num");
const secondsNumElem = document.querySelector(".countdown-card.seconds .num");

const today = new Date();
const futureDate = new Date(today);
const daysToAdd = 30;
futureDate.setDate(futureDate.getDate() + daysToAdd); //30 days from today
futureDate.setHours(9, 0, 0, 0); //at 9:00 am

let futureDateStr = futureDate.toDateString().slice(4).toUpperCase();
textDateElem.innerText =
  futureDateStr.slice(4, 6) +
  " " +
  futureDateStr.slice(0, 3) +
  " " +
  futureDateStr.slice(-4);

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
```

### Continued development

Continue working on more HTML/CSS/JavaScript challenges.

### Useful resources

- [The Modern JavaScript Tutorial](https://javascript.info/) - Quick and easy to understand JavaScript tutorial. This helped me understand how to work with Date and Time in JavaScript.
- [MDN](https://developer.mozilla.org/en-US/docs/Web) - HTML and CSS quick reference
- [MDN Customizable Select Elements](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select) - How to customize the <select> element

## Author

- Website - [jezzydev](https://github.com/jezzydev)
- Frontend Mentor - [@jezzydev](https://www.frontendmentor.io/profile/jezzydev)
