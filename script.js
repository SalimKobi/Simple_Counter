let btnAdd = document.querySelector("#add");
let btnSubtract = document.querySelector("#subtract");
let input = document.querySelector("input");
let value = 0;

btnAdd.addEventListener("click", function () {
  input.value = value++;
});

btnSubtract.addEventListener("click", function () {
  if (value > 0) {
    input.value = value--;
  } else {
    input.value = 0;
  }
});
