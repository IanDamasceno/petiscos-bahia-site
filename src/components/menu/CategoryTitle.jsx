import Reveal from "../ui/Reveal.jsx";

export default function CategoryTitle({ icon: IconComp, children }) {
  return (
    <Reveal>
      <div className="flex items-center gap-3.5 mb-6">
        <IconComp className="text-amarelo shrink-0" size={26} strokeWidth={2.2} />
        <h3 className="font-baloo text-xl md:text-2xl text-amarelo whitespace-nowrap">
          {children}
        </h3>
        <div className="h-[2px] w-full bg-gradient-to-r from-amarelo to-transparent" />
      </div>
    </Reveal>
  );
}
