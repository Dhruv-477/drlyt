let left_min = 515, left_max = 1015, top_min = 145, top_max = 435;

let left;
let right;

console.log(left,right);

const no_button = document.querySelector(".no");
const yes_butoon = document.querySelector(".yes");

no_button.style.left = '800px';
no_button.style.top = '170px';

no_button.addEventListener("mouseover", () => {
    console.log("button clicked");
    left = Math.floor(Math.random() * (left_max - left_min + 1)) + left_min;
    right = Math.floor(Math.random() * (top_max - top_min + 1)) + top_min;
    console.log(left,right);
    no_button.style.left = `${left}px`;
    no_button.style.top = `${right}px`;
});
no_button.addEventListener("click", () => {
    console.log("button clicked");
    left = Math.floor(Math.random() * (left_max - left_min + 1)) + left_min;
    right = Math.floor(Math.random() * (top_max - top_min + 1)) + top_min;
    console.log(left,right);
    no_button.style.left = `${left}px`;
    no_button.style.top = `${right}px`;
});

yes_butoon.addEventListener("click", () => {
    alert("I love you toooo 🥰🥰🥰🥰");
});