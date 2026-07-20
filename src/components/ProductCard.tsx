import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-cacao/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <img
        src={product.image}
        alt={`Helado ${product.name}`}
        className="h-56 w-full bg-mint object-cover"
      />

      <div className="space-y-4 p-5">
        <div>
          <h3 className="text-xl font-bold text-cacao">{product.name}</h3>
          <p className="mt-2 min-h-20 text-sm leading-6 text-cacao/70">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <p className="text-lg font-bold text-berry">${product.price} MXN</p>
          <button
            className="rounded-full bg-cacao px-4 py-2 text-sm font-semibold text-white transition hover:bg-berry"
            type="button"
          >
            Ver producto
          </button>
        </div>
      </div>
    </article>
  );
}
