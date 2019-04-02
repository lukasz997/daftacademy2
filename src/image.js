export default function(drink) {
  const div = document.createElement("div");
  const drinkName = document.createElement("h2");

  drinkName.innerHTML = drink.name;
  div.className = "image-container";

  div.appendChild(drinkName);
  div.style.backgroundImage = `url(${drink.url})`;

  return div;
}
