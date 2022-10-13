let img = document.querySelector(".img");
let number = 0;
img.addEventListener("click", function () {
  console.log("Clickme!");
  number++;
  document.querySelector("#number").innerHTML = number;
});
