import { MessageCircle } from "lucide-react";
import Reveal from "../ui/Reveal.jsx";

const CONTACTS = [
  { label: "Atendimento 1", phoneDisplay: "(73) 99912-9091", phoneWa: "5573999129091" },
  { label: "Atendimento 2", phoneDisplay: "(71) 98847-8847", phoneWa: "5571988478847" },
];

export default function ContactSection() {
  return (
    <section id="contato" className="py-16">
      <Reveal className="text-center mb-10">
        <span className="text-vermelho font-bold text-sm tracking-[2px] uppercase">
          Fale com a gente
        </span>
        <h2 className="font-baloo text-3xl md:text-4xl mt-2">
          Peça pelo <span className="text-amarelo">WhatsApp</span>
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
        {CONTACTS.map((c, i) => (
          <Reveal key={c.phoneWa} delay={i * 100}>
            <div className="bg-preto-2 border border-[#2c2a31] rounded-xl p-7 text-center h-full">
              <p className="text-creme-suave">{c.label}</p>
              <span className="block text-xl font-bold text-amarelo my-2.5">
                {c.phoneDisplay}
              </span>
              <a
                href={`https://wa.me/${c.phoneWa}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-preto font-bold px-5 py-2.5 rounded-full text-sm hover:brightness-110 transition"
              >
                <MessageCircle size={18} /> Chamar no WhatsApp
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export { CONTACTS };
