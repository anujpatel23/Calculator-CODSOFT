const buttons = document.querySelectorAll(".button");
const input = document.querySelector("#input");
// const buttonList = Array.from(buttons);
let string = "";
let text = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("#input").value = string;
      console.log(string);
    } else if (e.target.innerHTML == "AC") {
      string = "";
      document.querySelector("#input").value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.slice(0, -1);
      document.querySelector("#input").value = string;
    //   console.log(string);
    } else {
      string = string + e.target.innerHTML;
      console.log(string);

      document.querySelector("#input").value = string;
    }
  });
});

// a = "4-6+234/3";
// console.log(eval(a));
