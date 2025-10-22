// src/storage/localStorageUtil.js
export const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

localStorage.setItem(
  "foods",
  JSON.stringify([
    {
      id: "1",
      name: "Grilled Chicken Salad",
      calories: 350,
      price: 8.99,
      description: "Fresh grilled chicken with mixed greens and vinaigrette.",
      image: "https://ifoodreal.com/wp-content/uploads/2021/06/fg-grilled-chicken-salad.jpg"
    },
    {
      id: "2",
      name: "Veggie Burger",
      calories: 400,
      price: 7.49,
      description: "Plant-based patty with lettuce, tomato, and vegan mayo.",
      image: "https://png.pngtree.com/background/20250602/original/pngtree-veggie-burger-with-plant-based-patty-lettuce-tomato-and-vegan-mayo-picture-image_16606082.jpg"
    },
    {
      id: "3",
      name: "Spaghetti Bolognese",
      calories: 600,
      price: 9.99,
      description: "Classic Italian pasta with rich meat sauce.",
      image:"https://img.chefkoch-cdn.de/rezepte/393031127655461/bilder/1585337/crop-960x540/spaghetti-bolognese.jpg"
    },
    {
      id: "4",
      name: "Sushi Platter",
      calories: 300,
      price: 12.49,
      description: "Assorted sushi rolls with soy sauce and wasabi.",
      image:"https://cdn.foodstorm.com/e5184b75632349358c9031c2ef988e6b/images/0ac13014da6f4fd1adee7eb7fc2f70eb_1080w.jpg"
    },
    {
      id: "5",
      name: "Margherita Pizza",
      calories: 550,
      price: 10.99,
      description:
        "Thin-crust pizza with fresh tomatoes, mozzarella, and basil.",
        image:"https://safrescobaldistatic.blob.core.windows.net/media/2022/11/PIZZA-MARGHERITA.jpg"
    },
    {
      id: "6",
      name: "Beef Burrito",
      calories: 700,
      price: 8.49,
      description: "Flour tortilla filled with seasoned beef, rice, and beans.",
      image:"https://mojo.generalmills.com/api/public/content/UslXv1e1gUabOLILabyqwg_gmi_hi_res_jpeg.jpeg?v=c477766e&t=466b54bb264e48b199fc8e83ef1136b4"
    },
    {
      id: "7",
      name: "Chicken Tikka Masala",
      calories: 650,
      price: 11.99,
      description: "Tender chicken in creamy tomato curry with rice.",
      image:"https://www.recipetineats.com/tachyon/2018/04/Chicken-Tikka-Masala_0-SQ.jpg?resize=500%2C500"
    },
    {
      id: "8",
      name: "Falafel Wrap",
      calories: 450,
      price: 6.99,
      description: "Crispy falafel in pita bread with hummus and veggies.",
      image:"https://makefoodlovely.com/wp-content/uploads/2025/01/Copycat-Starbucks-Spicy-Falafel-Pocket-Recipe.png"
    },
    {
      id: "9",
      name: "Pad Thai",
      calories: 550,
      price: 9.49,
      description:
        "Stir-fried rice noodles with tofu, peanuts, and tamarind sauce.",
        image:"https://www.recipetineats.com/tachyon/2020/01/Chicken-Pad-Thai_9-SQ.jpg"
    },
    {
      id: "10",
      name: "Caesar Salad",
      calories: 320,
      price: 7.99,
      description:
        "Romaine lettuce with Caesar dressing, croutons, and parmesan.",
        image:"https://static01.nyt.com/images/2024/09/10/multimedia/JG-Parmesan-Crusted-Salmon-Caesar-Saladrex-kjpb/JG-Parmesan-Crusted-Salmon-Caesar-Saladrex-kjpb-mediumSquareAt3X.jpg"
    },
    {
      id: "11",
      name: "BBQ Ribs",
      calories: 900,
      price: 13.99,
      description: "Slow-cooked pork ribs glazed with BBQ sauce.",
      image:"https://www.allrecipes.com/thmb/IWVelWahUb2gQxixWJC2N-HXp0k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/22469-Barbecue-Ribs-ddmfs-2x1-210-e799db142f594b00bb317bb357d0971c.jpg"
    },
    {
      id: "12",
      name: "Fish and Chips",
      calories: 750,
      price: 10.49,
      description: "Crispy fried cod with golden fries and tartar sauce.",
      image:"https://images.getrecipekit.com/20220707143834-atlantic_cod_fish_chips_recipe_1024x1024.webp?class=16x9"
    },
    {
      id: "13",
      name: "Tofu Stir Fry",
      calories: 400,
      price: 7.49,
      description: "Tofu and veggies stir-fried in soy-ginger sauce.",
      image:"https://naturallieplantbased.com/wp-content/uploads/2024/02/peanut-tofu-stir-fry-6-500x500.jpg"
    },
    {
      id: "14",
      name: "Avocado Toast",
      calories: 300,
      price: 5.99,
      description:
        "Sourdough toast topped with smashed avocado and chili flakes.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc9AIvAc6dkD5GTVhVASi91F4Jc4n7AbOFhw&s"
    },
    {
      id: "15",
      name: "Greek Gyro",
      calories: 500,
      price: 8.49,
      description: "Lamb and beef gyro in pita with tzatziki sauce.",
      image:"https://thegreekfoodie.com/wp-content/uploads/2025/02/Chicken_Gyros_SQ.jpg"
    },
    {
      id: "16",
      name: "Miso Ramen",
      calories: 600,
      price: 9.99,
      description: "Rich miso broth with noodles, egg, pork, and scallions.",
      image:"https://soomfoods.com/cdn/shop/articles/45_d115125d-8365-4865-af0e-5a8f42b577af_1600x.png?v=1750100505"
    },
    {
      id: "17",
      name: "Mac and Cheese",
      calories: 550,
      price: 7.99,
      description: "Creamy baked macaroni with cheddar cheese.",
      image:"https://www.onceuponachef.com/images/2024/06/Mac-and-Cheese-17-1200x1800.jpg"
    },
    {
      id: "18",
      name: "Teriyaki Chicken Bowl",
      calories: 500,
      price: 8.99,
      description: "Grilled chicken with rice and teriyaki sauce.",
      image:"https://somuchfoodblog.com/wp-content/uploads/2023/09/chicken-teriyaki-bowls4.jpg"
    },
    {
      id: "19",
      name: "Banh Mi Sandwich",
      calories: 420,
      price: 6.49,
      description: "Vietnamese baguette with pork, pickled veggies, and herbs.",
      image:"https://www.dinneratthezoo.com/wp-content/uploads/2019/11/bahn-mi-14.jpg"
    },
    {
      id: "20",
      name: "Stuffed Bell Peppers",
      calories: 480,
      price: 7.99,
      description: "Bell peppers filled with beef, rice, and tomato sauce.",
      image:"https://tyberrymuch.com/wp-content/uploads/2020/09/vegan-stuffed-peppers-recipe-720x720.jpg"
    },

    
  ])
);
