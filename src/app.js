import DRINKS from "./assets/imageURL";
import ImageTemplate from "./image";
import Navigation from "./navigation";

export default function() {
  const { body } = document;

  const navigation = Navigation();

  const main = document.createElement("div");
  main.className = "app-container";

  main.appendChild(navigation);

  DRINKS.forEach(drink => {
    const newImage = ImageTemplate(drink);
    main.appendChild(newImage);
  });

  body.appendChild(main);
}
