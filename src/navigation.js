import DrinkCategories from "./drinkCategories";

export default function() {
  const container = document.createElement("nav");

  DrinkCategories.forEach(category => {
    const listItem = document.createElement("button");
    listItem.innerHTML = category;
    container.appendChild(listItem);
  });

  return container;
}
