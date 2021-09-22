const body = document.querySelector("body");
const pagex = document.querySelectorAll("h2")[0];
const pagey = document.querySelectorAll("h2")[1];
console.log(body);
body.addEventListener("mousedown", (e) => {
  pagex.innerText = e.pageX;
  pagey.innerText = e.pageY;
  console.log(e.pageY);
});
