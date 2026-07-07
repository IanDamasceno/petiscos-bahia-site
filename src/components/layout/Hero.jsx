import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import DoodleBorder from "../ui/DoodleBorder.jsx";

export default function Hero({ onNavigate }) {
  const contentRef = useRef(null);

  return (
    <section className="relative overflow-hidden text-center px-10 sm:px-6 min-h-screen flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_50%_-10%,#232028_0%,#111014_60%)]">
      <DoodleBorder contentRef={contentRef} />
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#F5C518 1px, transparent 1.5px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div ref={contentRef} className="relative z-10 inline-block">
        <img
          src="/images/logo_bahia.png"
          alt="Logo Petiscos Bahia"
          className="animate-float mx-auto mb-6 w-[220px] md:w-[280px] drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
        />
        <h1
          className="animate-title-in font-baloo font-extrabold text-amarelo leading-none text-[clamp(3rem,9vw,6.5rem)]"
          style={{ WebkitTextStroke: "2px #7A1420" }}
        >
          Petiscos Bahia
        </h1>
        <div className="flex gap-5 justify-center flex-wrap mt-10">
          <button
            onClick={() => onNavigate("cardapio")}
            className="bg-amarelo text-preto font-bold text-lg px-10 py-5 rounded-xl hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(245,197,24,0.28)] transition-all"
          >
            Ver catálogo
          </button>
          <button
            onClick={() => onNavigate("contato")}
            className="border-2 border-amarelo text-amarelo font-bold text-lg px-10 py-5 rounded-xl hover:bg-amarelo hover:text-preto hover:-translate-y-0.5 transition-all"
          >
            Agendar visita
          </button>
        </div>
      </div>

      <button
        onClick={() => onNavigate("cardapio")}
        aria-label="Veja o catálogo"
        className="animate-pulse absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-amarelo hover:text-amarelo-2 transition-colors"
      >
        <span className="text-sm font-semibold tracking-wide">Veja o catálogo</span>
        <ChevronDown size={26} />
      </button>
    </section>
  );
}
