const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const markup = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");
list.insertAdjacentHTML("beforeend", markup);

console.log(markup);
