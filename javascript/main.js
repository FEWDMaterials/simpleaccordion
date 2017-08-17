/* CURRENTLY IN: javascript/main.js */

/*

YOU ARE TO CREATE A SIMPLE ACCORDION

How it should work...

When user clicks the plus sign, it should become a minue sign and the content
should display
When user clicks the minus sign, it should become a plus sign and the content
should hide


PHASE 1:
    * w/partner: SIMPLY __COMMENT__ out all these lines of code 
      so that you are clear as to what is happening. feel free to console.log
      as you see fit

PHASE 2:
    * this accordion currently does not work
    * using *only* the functions provided (and HTML/CSS) make this accordion work as described above

PHASE 3:
    * force the content to fade in instead of popping in


*/

const addClass = ($target, className) => {
    if ($target === null) return false;
    if (typeof className !== "string") return false;

    $target.classList.add(className);
    return true;
}

const removeClass = ($target, className) => {
    if ($target === null) return false;
    if (typeof className !== "string") return false;

    $target.classList.remove(className);
    return true;
}

let isCurrentlyOpen = false;
const $accordion = document.querySelector('.js-accordion');
const $expander = document.querySelector('.js-expander');
const $plus = document.querySelector('.js-plus');
const $minus = document.querySelector('.js-minus');
const $content = document.querySelector('.js-content');

const onExpanderClicked = (e) => {
    console.log('hello, wrold!');
}

$expander.addEventListener('click', onExpanderClicked);
