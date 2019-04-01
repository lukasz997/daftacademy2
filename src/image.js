export default function(drink) {
  const div = document.createElement("div");
  const drinkName = document.createElement("h2");
  //const image = document.createElement("img");

  drinkName.innerHTML = drink.name;
  div.className = "image-container";
  //image.src = drink.url;

  div.appendChild(drinkName);
  div.style.backgroundImage = `url(${drink.url})`;
  //div.appendChild(image);

  return div;
}
