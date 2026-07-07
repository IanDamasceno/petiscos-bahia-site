const NAV = [
  { id: "cardapio", label: "Catálogo" },
  { id: "contato", label: "Contato" },
];

export default function Header({ onNavigate }) {
  return (
    <header className="sticky top-0 z-50 bg-preto/90 backdrop-blur-md border-b-[3px] border-amarelo">
      <div className="max-w-[1100px] mx-auto px-6 py-3.5 flex items-center justify-between gap-4">
        <div className="font-baloo font-extrabold text-xl md:text-2xl tracking-wide">
          <span className="text-amarelo">Petiscos</span>{" "}
          <span className="text-vermelho">Bahia</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-5">
            {NAV.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className="text-sm font-semibold text-creme border-b-2 border-transparent hover:text-amarelo hover:border-amarelo transition-colors pb-0.5"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export { NAV };
