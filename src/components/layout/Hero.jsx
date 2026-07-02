import { Flame } from "lucide-react";

export default function Hero({ onNavigate }) {
  return (
    <section className="relative overflow-hidden text-center px-6 pt-20 pb-16 border-b-4 border-vermelho bg-[radial-gradient(ellipse_at_50%_-10%,#232028_0%,#111014_60%)]">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#F5C518 1px, transparent 1.5px)",
          backgroundSize: "26px 26px",
        }}
      />
      <Flame className="mx-auto mb-4 text-vermelho animate-float" size={38} />
      <span className="animate-ribbon-in inline-block bg-vermelho text-creme font-baloo font-bold text-base md:text-lg px-6 py-2.5 rounded-md shadow-lg -rotate-2 mb-6">
        Qualidade em Alimentos
      </span>
      <h1
        className="animate-title-in font-baloo font-extrabold text-amarelo leading-none text-[clamp(2.4rem,7vw,5rem)]"
        style={{ WebkitTextStroke: "2px #7A1420" }}
      >
        Petiscos Bahia
      </h1>
      <p className="max-w-xl mx-auto mt-5 mb-8 text-creme-suave text-base md:text-lg">
        Petiscos congelados prontos para fritar: bolinhos, pastéis, croquetas e muito mais — a
        verdadeira comida de boteco, direto para o seu balcão.
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <button
          onClick={() => onNavigate("frutosdomar")}
          className="bg-amarelo text-preto font-semibold px-6 py-3.5 rounded-lg hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(245,197,24,0.28)] transition-all"
        >
          Ver cardápio
        </button>
        <button
          onClick={() => onNavigate("contato")}
          className="border-2 border-amarelo text-amarelo font-semibold px-6 py-3.5 rounded-lg hover:bg-amarelo hover:text-preto hover:-translate-y-0.5 transition-all"
        >
          Fazer pedido
        </button>
      </div>
    </section>
  );
}
