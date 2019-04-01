import DRINKS from "./assets/imageURL";
import ImageTemplate from "./image";

export default function() {
  const { body } = document;

  const main = document.createElement("div");
  main.className = "image-container";

  DRINKS.forEach(drink => {
    const newImage = ImageTemplate(drink);
    main.appendChild(newImage);
  });

  body.appendChild(main);
}
