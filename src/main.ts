const SAY_HI = "Hello World!";

console.log(SAY_HI);
console.log(process.env.ENV);

const APP = document.querySelector('#app');
if (APP) {
  APP.textContent = SAY_HI;
}