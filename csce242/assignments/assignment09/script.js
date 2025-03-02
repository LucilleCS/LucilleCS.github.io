window.onload = () => {
  class PizzaItem {
    constructor(name, picture, ingredients, sauce, price) {
      this.name = name;
      this.picture = picture;
      this.ingredients = ingredients;
      this.sauce = sauce;
      this.price = price;
    }
  }

  const pizza = [
    new PizzaItem(
      "Hawaiian",
      "images/hawaiian.jpg",
      "Ham, pineapple, mozzarella",
      "Tomato sauce",
      14.99
    ),
    new PizzaItem(
      "Cheese",
      "images/cheese.jpg",
      "Parmesan and mozzarella cheese",
      "Tomato sauce",
      11.49
    ),
    new PizzaItem(
      "Margherita",
      "images/margarita.jpg",
      "Mozzarella, basil, tomatoes",
      "Tomato sauce",
      12.99
    ),
    new PizzaItem(
      "Pepperoni",
      "images/pepperoni.jpg",
      "Pepperoni, mozzarella",
      "Tomato sauce",
      13.99
    ),
    new PizzaItem(
      "Veggie",
      "images/veggie.jpg",
      "Bell peppers, onions, mushrooms, olives, mozzarella, tomato",
      "Tomato sauce",
      13.49
    ),
  ];

  const pizzaItemsContainer = document.getElementById("pizzaItems");

  pizza.forEach((pizzaItem) => {
    const pizzaDiv = document.createElement("div");
    const img = document.createElement("img");
    img.src = pizzaItem.picture;
    img.alt = pizzaItem.name;
    img.classList.add("pizza-image");

    const name = document.createElement("h3");
    name.textContent = pizzaItem.name;
    pizzaDiv.appendChild(name);
    pizzaDiv.appendChild(img);

    img.onclick = () => {
      document.getElementById("id01").style.display = "block";
      document.getElementById("modalHeader").textContent = pizzaItem.name;
      document.getElementById(
        "ingredients"
      ).textContent = `Ingredients: ${pizzaItem.ingredients}`;
      document.getElementById(
        "price"
      ).textContent = `Price: $${pizzaItem.price.toFixed(2)}`;
      document.getElementById(
        "sauce"
      ).textContent = `Sauce: ${pizzaItem.sauce}`;
      document.getElementById("pizzaPic").src = pizzaItem.picture;
    };

    pizzaItemsContainer.appendChild(pizzaDiv);
  });
};
