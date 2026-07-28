import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { SectionTitle } from "@/components/SectionTitle";
import { productSizes, products } from "@/data/products";

const instagramUrl = "https://www.instagram.com/corazonsabio_helados/";
const whatsappMessage = encodeURIComponent(
  "Hola Corazon Sabio, quiero informacion sobre sabores y pedidos."
);

const values = [
  {
    name: "Calidad",
    description:
      "No vendemos un lote si no cumple con la textura, sabor o presentacion esperada.",
  },
  {
    name: "Honestidad",
    description:
      "Comunicamos con claridad nuestros ingredientes y beneficios.",
  },
  {
    name: "Conciencia",
    description:
      "Elegimos proveedores e ingredientes que realmente aportan bienestar.",
  },
  {
    name: "Armonia",
    description:
      "Mantenemos un ambiente de trabajo respetuoso, colaborativo y sin conflictos.",
  },
  {
    name: "Amor",
    description:
      "Ponemos carino en cada paso: desde la seleccion de ingredientes hasta la atencion al cliente.",
  },
  {
    name: "Bienestar",
    description: "Nuestro producto cuida la salud de quien lo consume.",
  },
];

const locations = [
  {
    day: "Viernes",
    hours: "11:00 a 4:30",
    place: "Tianguis Ameyalli",
  },
  {
    day: "Sabados",
    hours: "10:00 a 4:00",
    place: "Tianguis Ollin Renacer",
  },
  {
    day: "Domingos",
    hours: "10:00 a 3:00",
    place: "Casa Coahuila",
  },
];

const waterProducts = products.filter((product) => product.category === "Agua");
const creamyProducts = products.filter(
  (product) => product.category === "Cremoso"
);

export default function HomePage() {
  return (
    <main>
      <Header />

      <section id="inicio" className="relative min-h-[620px] overflow-hidden">
        <img
          src="/images/brand/brandboard.png"
          alt="Helados y marca Corazon Sabio"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-cacao/60" />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-6xl items-center px-5 py-20">
          <div className="max-w-2xl text-white">
            <p className="mb-4 inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
              Vegano - Sin lacteos - Sin azucar refinada
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              Helado consciente para disfrutar con bienestar
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
              Corazon Sabio crea helados artesanales con ingredientes de origen
              vegetal, sabores honestos y una propuesta pensada para llevar
              conciencia y sabor a cada persona.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="inline-flex rounded-full bg-peach px-6 py-3 text-base font-bold text-cacao shadow-sm transition hover:bg-mint"
                href="#productos"
              >
                Ver sabores
              </a>
              <a
                className="inline-flex rounded-full border border-white/60 px-6 py-3 text-base font-bold text-white transition hover:bg-white hover:text-cacao"
                href={instagramUrl}
                rel="noreferrer"
                target="_blank"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16" id="filosofia">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle
            eyebrow="Filosofia"
            title="Dulzura simple, ingredientes conscientes"
            description="Elaboramos helados veganos, sin lacteos y sin azucar refinada. Buscamos que cada sabor sea una experiencia rica, honesta y cercana al bienestar."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-lg bg-cream p-6">
              <h3 className="text-2xl font-bold text-cacao">Mision</h3>
              <p className="mt-4 text-lg italic leading-8 text-cacao/75">
                Llevar consciencia y sabor a la boca de las personas.
              </p>
            </article>
            <article className="rounded-lg bg-mint p-6">
              <h3 className="text-2xl font-bold text-cacao">Vision</h3>
              <p className="mt-4 text-lg italic leading-8 text-cacao/75">
                Ser la heladeria consciente favorita de las personas.
              </p>
            </article>
            <article className="rounded-lg bg-peach p-6">
              <h3 className="text-2xl font-bold text-cacao">Valores</h3>
              <p className="mt-4 text-lg italic leading-8 text-cacao/75">
                Bienestar, armonia, conciencia, honestidad, calidad y amor.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle
            title="Valores aplicados"
            description="Estos principios guian la forma en que elegimos ingredientes, producimos cada lote y atendemos a quienes confian en Corazon Sabio."
          />

          <div className="mt-10 overflow-hidden rounded-lg border border-cacao/20 bg-white">
            {values.map((value) => (
              <div
                className="grid border-b border-cacao/10 last:border-b-0 md:grid-cols-[180px_1fr]"
                key={value.name}
              >
                <div className="bg-mint/50 p-4 font-bold text-cacao">
                  {value.name}
                </div>
                <div className="p-4 leading-7 text-cacao/75">
                  {value.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16" id="productos">
        <SectionTitle
          title="Sabores disponibles"
          description="Helados artesanales en presentacion de 1/2 litro y 1 litro. Tenemos sabores tipo agua, frescos y frutales, y sabores cremosos con base vegetal, sin lacteos y sin azucar refinada."
        />

        <div className="mx-auto mt-8 flex max-w-md justify-center gap-3 rounded-lg bg-white p-3 text-center text-cacao shadow-sm">
          {productSizes.map((size) => (
            <div className="flex-1 rounded-md bg-cream p-3" key={size.label}>
              <p className="text-sm font-semibold">{size.label}</p>
              <p className="text-2xl font-bold text-berry">${size.price}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-cacao">Tipo agua</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {waterProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-2xl font-bold text-cacao">Tipo cremosos</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {creamyProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16" id="ubicaciones">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle
            title="Nos encontramos en"
            description="Puedes comprar Corazon Sabio en estos puntos de encuentro durante el fin de semana."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {locations.map((location) => (
              <article
                className="rounded-lg border border-cacao/10 bg-cream p-6 text-center"
                key={location.place}
              >
                <p className="text-sm font-bold uppercase tracking-wide text-berry">
                  {location.day}
                </p>
                <h3 className="mt-3 text-2xl font-bold text-cacao">
                  {location.place}
                </h3>
                <p className="mt-3 text-lg text-cacao/75">{location.hours}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16" id="contacto">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1fr_280px] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-berry">
              Contactanos
            </p>
            <h2 className="mt-3 text-3xl font-bold text-cacao sm:text-4xl">
              Sigue a Corazon Sabio y haz tu pedido
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-cacao/75">
              Escanea el QR o visita nuestro Instagram para conocer novedades,
              sabores de temporada y puntos de venta. Tambien puedes escribirnos
              por correo.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="rounded-full bg-cacao px-5 py-3 text-sm font-bold text-white transition hover:bg-berry"
                href={instagramUrl}
                rel="noreferrer"
                target="_blank"
              >
                Abrir Instagram
              </a>
              <a
                className="rounded-full bg-berry px-5 py-3 text-sm font-bold text-white transition hover:bg-cacao"
                href={`https://wa.me/?text=${whatsappMessage}`}
                rel="noreferrer"
                target="_blank"
              >
                Abrir WhatsApp
              </a>
              <a
                className="rounded-full border border-cacao/30 px-5 py-3 text-sm font-bold text-cacao transition hover:bg-white"
                href="mailto:corazonsabioglace@gmail.com"
              >
                corazonsabioglace@gmail.com
              </a>
            </div>
          </div>

          <a href={instagramUrl} rel="noreferrer" target="_blank">
            <img
              src="/images/social/instagram-qr.png"
              alt="QR de Instagram de Corazon Sabio"
              className="mx-auto w-full max-w-[260px] rounded-lg bg-white p-3 shadow-sm"
            />
          </a>
        </div>
      </section>

      <a
        aria-label="Abrir WhatsApp"
        className="fixed bottom-5 right-5 z-20 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:scale-105"
        href={`https://wa.me/?text=${whatsappMessage}`}
        rel="noreferrer"
        target="_blank"
      >
        WhatsApp
      </a>
    </main>
  );
}
