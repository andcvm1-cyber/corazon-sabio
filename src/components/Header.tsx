const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sabores", href: "#productos" },
  { label: "Ubicaciones", href: "#ubicaciones" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-cacao/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <a href="#inicio" className="flex items-center">
          <img
            src="/images/brand/logo-horizontal.png"
            alt="Corazon Sabio"
            className="h-9 w-auto max-w-[170px] object-contain sm:max-w-[260px]"
          />
        </a>

        <nav aria-label="Navegacion principal">
          <ul className="flex flex-wrap items-center justify-end gap-1 text-sm font-medium text-cacao/80 sm:gap-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  className="rounded-full px-3 py-2 transition hover:bg-mint hover:text-cacao"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
