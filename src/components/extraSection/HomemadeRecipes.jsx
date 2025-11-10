import React from "react";


const recipes = [
  {
    id: 1,
    name: "Creamy Garlic Pasta",
    description: "Rich and silky pasta tossed in homemade garlic cream sauce.",
    image: "https://i.ibb.co.com/M5Dc8F0H/gina-s-auckland-EYp-Tg-Kv-TIn-Q-unsplash.jpg",
  },
  {
    id: 2,
    name: "Classic Beef Curry",
    description: "Slow-cooked beef with aromatic spices straight from the kitchen.",
    image: "https://i.ibb.co.com/fd3TVgY2/vishnu-vk-Y8-D0t9ba-HJw-unsplash.jpg",
  },
  {
    id: 3,
    name: "Spicy Chicken Wings",
    description: "Crispy, tangy wings coated in a spicy homemade glaze.",
    image: "https://i.ibb.co.com/VWkXBh0v/kouji-tsuru-j5-Ku-GNRBc1-A-unsplash.jpg",
  },
  {
    id: 4,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a gooey molten center — pure indulgence!",
    image: "https://i.ibb.co.com/2Y56ffC6/american-heritage-chocolate-8l-PKz-LSWNg-M-unsplash.jpg",
  },
];

const HomemadeRecipes = () => {
  return (
    <div className="bg-[#FFFAF0] py-10 md:py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FF7B00] mb-8">
          This Week's Homemade Recipes
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-10">
          Handpicked dishes from our FlavorHood community that bring restaurant
          flavors right to your kitchen.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg "
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-[#FF7B00] mb-2">
                  {recipe.name}
                </h3>
                <p className="text-gray-600 text-sm">{recipe.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomemadeRecipes;
