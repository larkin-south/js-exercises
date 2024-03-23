const container = document.querySelector("#container");

const content = document.createElement("p");
content.classList.add("content");
content.style.color = "red";
content.textContent = "Hey this is red!";

const blue = document.createElement("h3");
blue.style.color = "blue";
blue.textContent = "I'm a blue h3"

const div = document.createElement("div");
div.style.border = "black 1px solid";
div.style.background = "pink"

const divh1 = document.createElement("h1");
divh1.textContent = "I'm in a div!";

const divp = document.createElement("p");
divp.textContent = "ME TOO!";

function alertFunction() {
    alert("YAY! YOU DID IT!");
  }

const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });


container.appendChild(content);
container.appendChild(blue);
div.appendChild(divh1);
div.appendChild(divp);
container.appendChild(div);