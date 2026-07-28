import type { Product } from "@/data/products";
import { productSizes } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const message = encodeURIComponent(
    `Hola Corazon Sabio, quiero pedir helado sabor ${product.name}.`
  );

  return (
    <article className="overflow-hidden rounded-lg border border-cacao/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <img
        src={product.image}
        alt={`Helado ${product.name}`}
        className="h-56 w-full bg-mint object-cover"
      />

      <div className="space-y-4 p-5">
        <div>
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="rounded-full bg-mint px-3 py-1 text-xs font-bold uppercase tracking-wide text-cacao">
              Tipo {product.category}
            </span>
          </div>
          <h3 className="text-xl font-bold text-cacao">{product.name}</h3>
          <p className="mt-2 min-h-20 text-sm leading-6 text-cacao/70">
            {product.description}
          </p>
        </div>

        <div className="rounded-md bg-cream p-3 text-sm text-cacao">
          {productSizes.map((size) => (
            <div
              className="flex items-center justify-between py-1"
              key={size.label}
            >
              <span>{size.label}</span>
              <strong>${size.price} MXN</strong>
            </div>
          ))}
        </div>

        <div>
          <a
            className="inline-flex w-full justify-center rounded-full bg-cacao px-4 py-2 text-sm font-semibold text-white transition hover:bg-berry"
            href={`https://wa.me/?text=${message}`}
            rel="noreferrer"
            target="_blank"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
