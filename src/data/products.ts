export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Cacao Sabio",
    description:
      "Helado cremoso de cacao, preparado sin lácteos y sin azúcar refinada.",
    price: 95,
    image: "/images/helado-cacao.png",
  },
  {
    id: 2,
    name: "Frutos Rojos",
    description:
      "Sabor fresco y frutal con notas naturales de berries y textura suave.",
    price: 98,
    image: "/images/helado-frutos-rojos.png",
  },
  {
    id: 3,
    name: "Vainilla Consciente",
    description:
      "Un clásico delicado, vegano y endulzado sin azúcar refinada.",
    price: 90,
    image: "/images/helado-vainilla.png",
  },
];

// Para usar tus propias fotos, coloca tus imagenes en /public/images
// y reemplaza las rutas del campo "image" en los productos de arriba.
