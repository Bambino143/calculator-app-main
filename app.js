/* Plsss dont try read my code its very confusing even to me myself, i just wanted every thing work, so this is a very messy code. still aspiring to be a better programmer i'll do better next time🚀🚀 */
const keys = document.querySelectorAll(".num"),
  input = document.querySelector("input"),
  calculate = document.querySelector(".equals"),
  del = document.querySelector(".del"),
  reset = document.querySelector(".reset");

keys.forEach((x) => {
  x.addEventListener("click", () => {
    input.value += x.textContent;
  });
});

calculate.addEventListener("click", () => {
  event.preventDefault();
  let clean = input.value.replace(/x|÷/g, (x) => {
    return x === "x" ? "*" : "/";
  });
  clean = clean.replace(/,/g, "");
  input.value = eval(clean).toLocaleString();
});

del.addEventListener("click", () => {
  input.value = input.value.slice(0, -1);
});

reset.addEventListener("click", () => {
  input.value = "";
});

window.onload = function () {
  document.querySelector("input").value = "";
};

const click = document.querySelector(".click"),
  clickTwo = document.querySelector(".click2"),
  clickThree = document.querySelector(".click3"),
  toggle = document.querySelector(".toggle"),
  body = document.querySelector("body"),
  toggleBg = document.querySelector(".toggle-bg"),
  keysContainer = document.querySelector(".keys-container"),
  num = document.querySelectorAll(".num"),
  delReset = document.querySelectorAll(".del-reset");

click.addEventListener("click", () => {
  body.classList.remove("body-theme3");
  toggleBg.classList.remove("toggle-bg3");
  toggle.classList.remove("toggle3");
  body.classList.remove("body-theme3");
  input.classList.remove("input-theme3");
  keysContainer.classList.remove("keys-bg-theme3");
  num.forEach((x) => {
    x.classList.remove("keys-theme3");
  });
  delReset.forEach((x) => {
    x.classList.remove("del-reset3");
  });
  calculate.classList.remove("equals3");

  body.classList.remove("body-theme2");
  toggleBg.classList.remove("toggle-bg2");
  toggle.classList.remove("toggle2");
  body.classList.remove("body-theme2");
  input.classList.remove("input-theme2");
  keysContainer.classList.remove("keys-bg-theme2");
  num.forEach((x) => {
    x.classList.remove("keys-theme2");
  });
  delReset.forEach((x) => {
    x.classList.remove("del-reset2");
  });
  calculate.classList.remove("equals2");

  toggle.style.transform = "translateX(0px)";
});

clickTwo.addEventListener("click", () => {
  body.classList.remove("body-theme3");
  toggleBg.classList.remove("toggle-bg3");
  toggle.classList.remove("toggle3");
  body.classList.remove("body-theme3");
  input.classList.remove("input-theme3");
  keysContainer.classList.remove("keys-bg-theme3");
  num.forEach((x) => {
    x.classList.remove("keys-theme3");
  });
  delReset.forEach((x) => {
    x.classList.remove("del-reset3");
  });
  calculate.classList.remove("equals3");

  body.classList.add("body-theme2");
  toggleBg.classList.add("toggle-bg2");
  toggle.classList.add("toggle2");
  body.classList.add("body-theme2");
  input.classList.add("input-theme2");
  keysContainer.classList.add("keys-bg-theme2");
  num.forEach((x) => {
    x.classList.add("keys-theme2");
  });
  delReset.forEach((x) => {
    x.classList.add("del-reset2");
  });
  calculate.classList.add("equals2");

  toggle.style.transform = "translateX(18px)";
});

clickThree.addEventListener("click", () => {
  body.classList.remove("body-theme2");
  toggleBg.classList.remove("toggle-bg2");
  toggle.classList.remove("toggle2");
  body.classList.remove("body-theme2");
  input.classList.remove("input-theme2");
  keysContainer.classList.remove("keys-bg-theme2");
  num.forEach((x) => {
    x.classList.remove("keys-theme2");
  });
  delReset.forEach((x) => {
    x.classList.remove("del-reset2");
  });
  calculate.classList.remove("equals2");

  body.classList.add("body-theme3");
  toggleBg.classList.add("toggle-bg3");
  toggle.classList.add("toggle3");
  body.classList.add("body-theme3");
  input.classList.add("input-theme3");
  keysContainer.classList.add("keys-bg-theme3");
  num.forEach((x) => {
    x.classList.add("keys-theme3");
  });
  delReset.forEach((x) => {
    x.classList.add("del-reset3");
  });
  calculate.classList.add("equals3");

  toggle.style.transform = "translateX(35px)";
});
