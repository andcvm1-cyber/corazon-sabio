import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { SectionTitle } from "@/components/SectionTitle";
import { products } from "@/data/products";

export default function HomePage() {
  return (
    <main>
      <Header />

      <section
        id="inicio"
        className="relative min-h-[560px] overflow-hidden"
      >
        <img
          src="/images/brand/brandboard.png"
          alt="Helados y marca Corazón Sabio"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-cacao/60" />

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-6xl items-center px-5 py-20">
          <div className="max-w-2xl text-white">
            <p className="mb-4 inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
            Vegano · Sin lácteos · Sin azúcar refinada
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              Helado consciente para disfrutar sin culpa
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
              Corazón Sabio crea helados cremosos y deliciosos con ingredientes
              de origen vegetal, pensados para disfrutar algo dulce de forma más
              consciente.
            </p>
            <a
              className="mt-8 inline-flex rounded-full bg-peach px-6 py-3 text-base font-bold text-cacao shadow-sm transition hover:bg-mint"
              href="#productos"
            >
              Ver productos
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16" id="filosofia">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle
            eyebrow="Filosofía"
            title="Dulzura simple, ingredientes conscientes"
            description="Creemos que un postre puede ser rico, bonito y amable con el cuerpo. Por eso elaboramos helados sin lácteos y sin azúcar refinada, con recetas pensadas para cuidar cada ingrediente."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16" id="productos">
        <SectionTitle
          eyebrow="Tienda"
          title="Sabores disponibles"
          description="Estos son productos de ejemplo para el primer milestone. Más adelante podrás conectar un carrito y un proceso de pedido."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
