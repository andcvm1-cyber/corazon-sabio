export type ProductCategory = "Agua" | "Cremoso";

export type Product = {
  id: number;
  name: string;
  category: ProductCategory;
  description: string;
  image: string;
};

export const productSizes = [
  { label: "1/2 litro", price: 130 },
  { label: "1 litro", price: 250 },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Mango con Cardamomo",
    category: "Agua",
    description:
      "Mango fresco con un toque especiado y aromatico de cardamomo.",
    image: "/images/flavors/mango-cardamomo.png",
  },
  {
    id: 2,
    name: "Mango maracuya",
    category: "Agua",
    description:
      "Sabor tropical, brillante y ligeramente acido con mango y maracuya.",
    image: "/images/flavors/mango-maracuya.png",
  },
  {
    id: 3,
    name: "Tuna",
    category: "Agua",
    description:
      "Helado fresco y delicado con el dulzor natural de la tuna.",
    image: "/images/flavors/tuna.png",
  },
  {
    id: 4,
    name: "Blueberry",
    category: "Agua",
    description:
      "Notas frutales profundas, frescas y equilibradas de blueberry.",
    image: "/images/flavors/blueberry.png",
  },
  {
    id: 5,
    name: "Melon",
    category: "Agua",
    description:
      "Ligero, jugoso y refrescante, ideal para dias calidos.",
    image: "/images/flavors/melon.png",
  },
  {
    id: 6,
    name: "Guanabana",
    category: "Agua",
    description:
      "Tropical, suave y naturalmente dulce con acidez sutil.",
    image: "/images/flavors/guanabana.png",
  },
  {
    id: 7,
    name: "Mamey",
    category: "Agua",
    description:
      "Sabor mexicano, aterciopelado y dulce con cuerpo frutal.",
    image: "/images/flavors/mamey.png",
  },
  {
    id: 8,
    name: "Sandia",
    category: "Agua",
    description:
      "Muy fresco, ligero y jugoso, perfecto para compartir.",
    image: "/images/flavors/sandia.png",
  },
  {
    id: 9,
    name: "Limon con miel",
    category: "Agua",
    description:
      "Citricos vivos con dulzor amable de miel y final refrescante.",
    image: "/images/flavors/limon-miel.png",
  },
  {
    id: 10,
    name: "Fresa",
    category: "Agua",
    description:
      "Fresa natural, fresca y equilibrada, sin azucar refinada.",
    image: "/images/flavors/fresa.png",
  },
  {
    id: 11,
    name: "Clericot",
    category: "Agua",
    description:
      "Inspirado en frutas de temporada, ligero y lleno de color.",
    image: "/images/flavors/clericot.png",
  },
  {
    id: 12,
    name: "Durazno",
    category: "Agua",
    description:
      "Dulce, aromatico y suave, con sabor a fruta madura.",
    image: "/images/flavors/durazno.png",
  },
  {
    id: 13,
    name: "Cafe",
    category: "Cremoso",
    description:
      "Cremoso e intenso, con notas tostadas y cuerpo profundo.",
    image: "/images/flavors/cafe.png",
  },
  {
    id: 14,
    name: "Chocolate",
    category: "Cremoso",
    description:
      "Chocolate profundo, textura sedosa y dulzor equilibrado.",
    image: "/images/flavors/chocolate.png",
  },
  {
    id: 15,
    name: "Te chai",
    category: "Cremoso",
    description:
      "Especiado, calido y aromatico, con una base cremosa vegetal.",
    image: "/images/flavors/te-chai.png",
  },
  {
    id: 16,
    name: "Vainilla",
    category: "Cremoso",
    description:
      "Un clasico suave, delicado y cremoso sin lacteos.",
    image: "/images/flavors/vainilla.png",
  },
  {
    id: 17,
    name: "Coco",
    category: "Cremoso",
    description:
      "Cremoso, tropical y ligero, con sabor natural a coco.",
    image: "/images/flavors/coco.png",
  },
  {
    id: 18,
    name: "Pistache",
    category: "Cremoso",
    description:
      "Pistache suave, elegante y con notas ligeramente tostadas.",
    image: "/images/flavors/pistache.png",
  },
  {
    id: 19,
    name: "Cacao con naranja",
    category: "Cremoso",
    description:
      "Cacao intenso con un final citrico y aromatico de naranja.",
    image: "/images/flavors/cacao-naranja.png",
  },
];
