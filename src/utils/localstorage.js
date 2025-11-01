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
      name: "Inasal na manok",
      calories: 350,
      price: 8.99,
      description: "Inasal na manok is a unique Filipino grilled chicken dish which originated in Western Visayas and became the signature dish of the entire region. It employs various chicken cuts marinated in a mixture of vinegar and numerous spices such as lemongrass, garlic, and ginger.",
      image: "https://www.tasteatlas.com/images/dishes/a093a8930f4f4e8e8bb7237998a54957.jpg?mw=1300"
    },
    {
      id: "2",
      name: "Tom kha gai",
      calories: 400,
      price: 7.49,
      description: "Tom kha gai is Thailand's delicious national dish coming from the central part of the country and bearing the influence of neighbouring Laos. It is a soup whose name translates to boiled galangal chicken soup, consisting of coconut milk, chicken chunks or shreds, galangal (reddish-brown or pink woody plant related to ginger), lemongrass, garlic, bird's eye chili peppers, kaffir lime leaves, fish sauce, and shiitake mushrooms.",
      image: "https://www.tasteatlas.com/Images/Dishes/9bf54bc8b6ae431db23b5919b7442ce9.jpg?mw=1300"
    },
    {
      id: "3",
      name: "Çökertme kebabı",
      calories: 600,
      price: 9.99,
      description: "Çökertme kebabı is a traditional kebab variety originating from the Bodrum area. The dish consists of marinated strips of veal that are served with tiny fried potatoes, tomato sauce, and yogurt. The marinade is usually made with milk, olive oil, cumin, salt, and paprika, while the yogurt sauce that's served with the dish is enriched with garlic and salt.",
      image:"https://www.tasteatlas.com/images/dishes/5744d2fa07604cbb9d9e47559dba14d1.jpg?mw=1300"
    },
    {
      id: "4",
      name: "Rawon",
      calories: 300,
      price: 12.49,
      description: "Rawon is a unique Indonesian dish with origins in East Java. This flavorful soup is usually made with slow-braised beef and other traditional Indonesian ingredients such as lime leaves, lemongrass, ginger, and chili. However, the key element is buah kluwek, the Indonesian black nut.",
      image:"https://www.tasteatlas.com/images/dishes/aadf8e1a901242fb864992cf56531a6e.jpg?mw=1300"
    },
    {
      id: "5",
      name: "Biáng biáng noodles (Yóupō miàn)",
      calories: 550,
      price: 10.99,
      description:
        "Biáng biáng noodles are a type of hand-pulled noodle from Shaanxi province, famous for their extra-wide, belt-like shape and chewy texture. They are a staple of Xi’an, the provincial capital, and are often regarded as one of the defining foods of the region’s wheat-based cuisine.",
        image:"https://www.tasteatlas.com/Images/Dishes/f417c973168f4e2bba292267095d9669.jpg?mw=1300"
    },
    {
      id: "6",
      name: "Cochinita pibil",
      calories: 700,
      price: 8.49,
      description: "Cochinita pibil is a Mexican pork dish originating from Yucatan. Pork is marinated in a combination of annatto paste, bitter orange juice, and garlic. It is slowly baked and then shredded and served on tortillas, tacos, or on its own with shallots, pickled onions, salsa, and various roasted vegetables.",
      image:"https://www.tasteatlas.com/Images/Dishes/23a5477c30b14996a5ba9af61c433e62.jpg?mw=1300"
    },
    {
      id: "7",
      name: "Châteaubriand",
      calories: 650,
      price: 11.99,
      description: "Contrary to popular belief, the word Châteaubriand does not refer only to a cut of beef, but to a method used to grill or roast a thick cut of beef tenderloin. The steak was originally prepared by a chef named Montmireil in 1822 for a French author, diplomat, and statesman Francois René Vicomte de Chateaubriand.",
      image:"https://www.tasteatlas.com/images/dishes/c80f0a36c0ea4b8183ec7b2b270ecb5c.jpg?mw=1300"
    },
    {
      id: "8",
      name: "Unadon",
      calories: 450,
      price: 6.99,
      description: "Unadon is a Japanese dish consisting of grilled unagi (eel) fillets placed on top of steamed rice. The eel is grilled kabayaki-style, where the fish is split, gutted, butterflied, cut into squares, skewered, then diped in tare sauce before being grilled.",
      image:"https://www.tasteatlas.com/images/dishes/11c1ef29a50e47d3a4f64ef4ba57e31c.jpg?mw=1300"
    },
    {
      id: "9",
      name: "Khao soi",
      calories: 550,
      price: 9.49,
      description:
        "A signature dish of Northern Thailand, khao soi is a delicious coconut soup in which numerous regional influences were combined to create a truly spectacular dish. The base of the soup is a slightly spicy broth which combines coconut milk and red curry paste.",
        image:"https://www.tasteatlas.com/Images/Dishes/af467a8acc9b442ba6ca5fc5edf4707b.jpg?mw=1300"
    },
    {
      id: "10",
      name: "Chakhchoukha",
      calories: 320,
      price: 7.99,
      description:
        "Chakhchoukha is a flavorful Algerian stew consisting of torn pieces of a thin, round flatbread known as rougag, and marqa – a stew made with diced lamb, tomatoes, chickpeas, onions, and flavorings such as cumin, ras el hanout, caraway, galangal, lavender, and red chili peppers.",
        image:"https://www.tasteatlas.com/images/dishes/b019ff38fb52455497d53708c972de4e.jpg?mw=1300"
    },
    {
      id: "11",
      name: "Tonkotsu ramen",
      calories: 900,
      price: 13.99,
      description: "Tonkotsu is a unique style of ramen consisting of an extremely rich, fatty pork broth, fresh noodles, soft-yolk eggs, and tender pork belly that melts in the mouth. It is so popular and special that it could be a dish of its own, not just a ramen style.",
      image:"https://www.tasteatlas.com/Images/Dishes/a5c3045c128b413bb30a1ba93937ebec.jpg?mw=1300"
    },
    {
      id: "12",
      name: "Butter chicken (Murgh makhani)",
      calories: 750,
      price: 10.49,
      description: "Probably the best known of all Indian dishes, murgh makhani, internationally referred to as butter chicken, is a staple dish at most Indian restaurants. The dish originated in Delhi during the 1950s, when a man named Kundan Lal Gujral opened his restaurant called Moti Mahal.",
      image:"https://www.tasteatlas.com/images/dishes/01edfe5c71ec4ddf944b209683c65500.jpg?mw=1300"
    },
    {
      id: "13",
      name: "Hyderabadi biryani",
      calories: 400,
      price: 7.49,
      description: "Hyderabadi biryani is a South Indian dish consisting of basmati rice, goat, mutton, or chicken meat, lemon, yogurt, onions, and saffron. There are two main varieties of the dish – kachchi (raw) and pakki (cooked). ",
      image:"https://www.tasteatlas.com/images/dishes/3bd6dfaf53e244dfb7f3ee390447a2f8.jpg?mw=1300"
    },
    {
      id: "14",
      name: "Sinigang",
      calories: 300,
      price: 5.99,
      description:
        "Sinigang is a sour Filipino soup consisting of sampalok (fruits of the tamarind tree), water spinach, hot peppers, cabbage, broccoli, eggplant, diced tomatoes, sliced onions, ginger, garlic, green beans, fish sauce, and salt. The basic broth usually consists of rice washing, with the addition of a souring agent.",
        image:"https://www.tasteatlas.com/images/dishes/e98d832284c14b9d8308b88d7438be71.jpg?mw=1300"
    },
    {
      id: "15",
      name: "Chicken karahi (Murgh karahi)",
      calories: 500,
      price: 8.49,
      description: "Chicken karahi is a poultry dish that is popular in Pakistan and North India. The word karahi in its name refers to a thick and deep cooking-pot similar to a wok in which the dish is prepared. Apart from chicken, the dish is made with red chili powder, cumin, garam masala, ginger, allspice, cardamom, tomatoes, and garlic.",
      image:"https://www.tasteatlas.com/images/dishes/3faa37365d684db889d9da6aeab6b4bb.jpg?mw=1300"
    },
    {
      id: "16",
      name: "Khachapuri",
      calories: 600,
      price: 9.99,
      description: "This simple cheese bread known as khachapuri is the most famous dish in Georgia. It is traditionally topped with melted cheese, eggs and butter. There are different types of khachapuri, and even though some new cheese varieties such as mozzarella and feta have been incorporated in the dish, the most common additions still include traditional Georgian Sulguni or Imeretian cheese.",
      image:"https://www.tasteatlas.com/images/dishes/fc4383bf440d437a808745d9c514e160.jpg?mw=1300"
    },
    {
      id: "17",
      name: "Étouffée",
      calories: 550,
      price: 7.99,
      description: "Étouffée refers to a group of dishes with Cajun origins which are typically served as a main course (unlike gumbo, which is considered a soup) and are made with one type of shellfish such as shrimp or crawfish that are smothered in a thick sauce.",
      image:"https://www.tasteatlas.com/images/dishes/db0b99affa154a3cbbfc60b56e99a14f.jpg?mw=1300"
    },
    {
      id: "18",
      name: "Hünkar beğendi",
      calories: 500,
      price: 8.99,
      description: "Hünkar beğendi is a traditional dish consisting of a flavorful lamb stew that is served on top of a creamy roasted eggplant purée. The purée is often thickened with milk and cheese, while the whole dish is sometimes topped with a tomato-based sauce or garnished with freshly chopped parsley.",
      image:"https://www.tasteatlas.com/images/dishes/ee6bac368afb428eaad361455865d721.jpg?mw=1300"
    },
    {
      id: "19",
      name: "Sopa de lima",
      calories: 420,
      price: 6.49,
      description: "A traditional dish from Mexico's Yucatan Peninsula, sopa de lima is a spicy, flavorful chicken and tomato soup, contrary to its name that would make one think limes are the main ingredient in the dish. However, the soup is flavored with unique, bittersweet Yucatan limes and spicy habanero peppers.",
      image:"https://www.tasteatlas.com/images/dishes/dd6cebbd32164a54b26b2b996c8dd329.jpg?mw=1300https://www.tasteatlas.com/images/dishes/dd6cebbd32164a54b26b2b996c8dd329.jpg?mw=1300"
    },
    {
      id: "20",
      name: "Smacked cucumber (Pai huang gua)",
      calories: 480,
      price: 7.99,
      description: "Smacked cucumber is a traditional Asian dish that’s especially popular in Tibet as a snack for picnicking. The dish is usually made with a combination of cucumbers, garlic, sesame oil, black vinegar, and soy sauce. The cucumber is peeled and smacked with a rolling pin so that it’s bruised and starting to break apart.",
      image:"https://www.tasteatlas.com/images/dishes/af509587e29345f1b99a0a203b620f73.jpg?mw=1300"
    },

    
  ])
);
