const body = document.querySelector("body");
const pagex = document.querySelectorAll("h2")[0];
const pagey = document.querySelectorAll("h2")[1];
console.log(body);
body.addEventListener("touchmove", (e) => {
    console.log(e)
  pagex.innerText = e.touches[0].pageX;
  pagey.innerText = e.touches[0].pageY;
  
});
