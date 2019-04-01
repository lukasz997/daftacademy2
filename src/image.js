export default function(drink) {
  const div = document.createElement("div");
  const drinkName = document.createElement("h2");
  const image = document.createElement("img");

  image.className = "image-container";
  image.src = drink.url;

  return image;
}
