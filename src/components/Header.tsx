const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Carrito", href: "/carrito" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-cacao/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="/" className="flex items-center">
          <img
            src="/images/brand/logo-horizontal.png"
            alt="Corazón Sabio"
            className="h-9 w-auto max-w-[180px] object-contain sm:max-w-[260px]"
          />
        </a>

        <nav aria-label="Navegación principal">
          <ul className="flex items-center gap-2 text-sm font-medium text-cacao/80 sm:gap-5">
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
