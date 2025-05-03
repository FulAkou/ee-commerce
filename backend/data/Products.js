const products = [
  {
    name: "Ford Mustang",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dm9pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Voiture de luxe au design raffiné, alliant confort, puissance et technologie avancée. Matériaux haut de gamme, finitions soignées et performance exceptionnelle pour une expérience de conduite prestigieuse et inoubliable.",
    brand: "Cars",
    price: 42000,
    countInStock: 15,
    rating: 5.0,
    numReviews: 50,
  },
  {
    name: "Hynday i20",
    image:
      "https://images.unsplash.com/photo-1704340142770-b52988e5b6eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dm9pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Voiture de luxe au design raffiné, alliant confort, puissance et technologie avancée. Matériaux haut de gamme, finitions soignées et performance exceptionnelle pour une expérience de conduite prestigieuse et inoubliable.",
    brand: "Apple",
    price: 45049,
    countInStock: 10,
    rating: 4.0,
    numReviews: 120,
  },
  {
    name: "Voiture",
    image:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dm9pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Voiture de luxe au design raffiné, alliant confort, puissance et technologie avancée. Matériaux haut de gamme, finitions soignées et performance exceptionnelle pour une expérience de conduite prestigieuse et inoubliable.",
    brand: "Cars",
    price: 54009,
    countInStock: 19,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: "Voiture de luxe",
    image:
      "https://plus.unsplash.com/premium_photo-1683134240084-ba074973f75e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dm9pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Voiture de luxe au design raffiné, alliant confort, puissance et technologie avancée. Matériaux haut de gamme, finitions soignées et performance exceptionnelle pour une expérience de conduite prestigieuse et inoubliable.",
    brand: "Cars",
    price: 42049,
    countInStock: 50,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: "Porsche 911",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Voiture de luxe au design raffiné, alliant confort, puissance et technologie avancée. Matériaux haut de gamme, finitions soignées et performance exceptionnelle pour une expérience de conduite prestigieuse et inoubliable.",
    brand: "Cars",
    price: 20549,
    countInStock: 12,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: "Mercedes Benz",
    image:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZvaXR1cmV8ZW58MHx8MHx8fDA%3D",
    description:
      "Voiture de luxe au design raffiné, alliant confort, puissance et technologie avancée. Matériaux haut de gamme, finitions soignées et performance exceptionnelle pour une expérience de conduite prestigieuse et inoubliable.",
    brand: "Cars",
    price: 52049,
    countInStock: 3,
    rating: 5.0,
    numReviews: 8,
  },
  {
    name: "Aston Martin",
    image:
      "https://images.unsplash.com/photo-1469285994282-454ceb49e63c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Voiture de luxe au design raffiné, alliant confort, puissance et technologie avancée. Matériaux haut de gamme, finitions soignées et performance exceptionnelle pour une expérience de conduite prestigieuse et inoubliable.",
    brand: "Cars",
    price: 57900,
    countInStock: 13,
    rating: 5.0,
    numReviews: 8,
  },
  {
    name: "Ferari",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZvaXR1cmV8ZW58MHx8MHx8fDA%3D",
    description:
      "Voiture de luxe au design raffiné, alliant confort, puissance et technologie avancée. Matériaux haut de gamme, finitions soignées et performance exceptionnelle pour une expérience de conduite prestigieuse et inoubliable.",
    brand: "Cars",
    price: 40052,
    countInStock: 16,
    rating: 5.0,
    numReviews: 8,
  },
  {
    name: "VUS Honda blanc",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHZvaXR1cmV8ZW58MHx8MHx8fDA%3D",
    description:
      "Voiture de luxe au design raffiné, alliant confort, puissance et technologie avancée. Matériaux haut de gamme, finitions soignées et performance exceptionnelle pour une expérience de conduite prestigieuse et inoubliable.",
    brand: "Cars",
    price: 45000,
    countInStock: 6,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: "Ford Mustang GT",
    image:
      "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHZvaXR1cmV8ZW58MHx8MHx8fDA%3D",
    description:
      "Voiture de luxe au design raffiné, alliant confort, puissance et technologie avancée. Matériaux haut de gamme, finitions soignées et performance exceptionnelle pour une expérience de conduite prestigieuse et inoubliable.",
    brand: "Cars",
    price: 30049,
    countInStock: 5,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: "Vehicle tout terrain",
    image:
      "https://images.unsplash.com/photo-1486326658981-ed68abe5868e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHZvaXR1cmV8ZW58MHx8MHx8fDA%3D",
    description:
      "Voiture de luxe au design raffiné, alliant confort, puissance et technologie avancée. Matériaux haut de gamme, finitions soignées et performance exceptionnelle pour une expérience de conduite prestigieuse et inoubliable.",
    brand: "Cars",
    price: 54009,
    countInStock: 10,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: "BMW rouge",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHZvaXR1cmV8ZW58MHx8MHx8fDA%3D",
    description:
      "Voiture de luxe au design raffiné, alliant confort, puissance et technologie avancée. Matériaux haut de gamme, finitions soignées et performance exceptionnelle pour une expérience de conduite prestigieuse et inoubliable.",
    brand: "Cars",
    price: 549,
    countInStock: 17,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: "Berline noire",
    image:
      "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHZvaXR1cmV8ZW58MHx8MHx8fDA%3D",
    description:
      "Voiture de luxe au design raffiné, alliant confort, puissance et technologie avancée. Matériaux haut de gamme, finitions soignées et performance exceptionnelle pour une expérience de conduite prestigieuse et inoubliable.",
    brand: "Cars",
    price: 60009,
    countInStock: 5,
    rating: 4.0,
    numReviews: 10,
  },
  {
    name: "BMW X5",
    image:
      "https://images.unsplash.com/photo-1541443131876-44b03de101c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHZvaXR1cmV8ZW58MHx8MHx8fDA%3D",
    description:
      "Voiture de luxe au design raffiné, alliant confort, puissance et technologie avancée. Matériaux haut de gamme, finitions soignées et performance exceptionnelle pour une expérience de conduite prestigieuse et inoubliable.",
    brand: "Cars",
    price: 549,
    countInStock: 5,
    rating: 4.0,
    numReviews: 10,
  },
  {
    name: "Jeep Wrangler",
    image:
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHZvaXR1cmV8ZW58MHx8MHx8fDA%3D",
    description:
      "Voiture de luxe au design raffiné, alliant confort, puissance et technologie avancée. Matériaux haut de gamme, finitions soignées et performance exceptionnelle pour une expérience de conduite prestigieuse et inoubliable.",
    brand: "Cars",
    price: 25009,
    countInStock: 10,
    rating: 4.0,
    numReviews: 10,
  },
  {
    name: "Voiture de sport argentée",
    image:
      "https://images.unsplash.com/photo-1511994477422-b69e44bd4ea9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHZvaXR1cmV8ZW58MHx8MHx8fDA%3D",
    description:
      "Voiture de luxe au design raffiné, alliant confort, puissance et technologie avancée. Matériaux haut de gamme, finitions soignées et performance exceptionnelle pour une expérience de conduite prestigieuse et inoubliable.",
    brand: "Apple",
    price: 54900,
    countInStock: 4,
    rating: 5.0,
    numReviews: 150,
  },
  {
    name: "Ferrari 458",
    image:
      "https://images.unsplash.com/photo-1537984822441-cff330075342?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Voiture de luxe au design raffiné, alliant confort, puissance et technologie avancée. Matériaux haut de gamme, finitions soignées et performance exceptionnelle pour une expérience de conduite prestigieuse et inoubliable.",
    brand: "Apple",
    price: 50000,
    countInStock: 7,
    rating: 5.0,
    numReviews: 120,
  },
  {
    name: "BMW",
    image:
      "https://images.unsplash.com/photo-1490641815614-b45106d6dd04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHx2b2l0dXJlfGVufDB8fDB8fHww",
    description:
      "Voiture de luxe au design raffiné, alliant confort, puissance et technologie avancée. Matériaux haut de gamme, finitions soignées et performance exceptionnelle pour une expérience de conduite prestigieuse et inoubliable.",
    brand: "Cars",
    price: 35025,
    countInStock: 6,
    rating: 5.0,
    numReviews: 80,
  },
  {
    name: "Chevrolet Camaro",
    image:
      "https://images.unsplash.com/photo-1609520505218-7421df70121d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU5fHx2b2l0dXJlfGVufDB8fDB8fHww",
    description:
      "Voiture de luxe au design raffiné, alliant confort, puissance et technologie avancée. Matériaux haut de gamme, finitions soignées et performance exceptionnelle pour une expérience de conduite prestigieuse et inoubliable.",
    brand: "Cars",
    price: 18549,
    countInStock: 4,
    rating: 5.0,
    numReviews: 10,
  },
  {
    name: "BMW M3",
    image:
      "https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI5fHx2b2l0dXJlfGVufDB8fDB8fHww",
    description:
      "Voiture de luxe au design raffiné, alliant confort, puissance et technologie avancée. Matériaux haut de gamme, finitions soignées et performance exceptionnelle pour une expérience de conduite prestigieuse et inoubliable.",
    brand: "Cars",
    price: 23049,
    countInStock: 2,
    rating: 4.0,
    numReviews: 10,
  },
];

module.exports = products;
