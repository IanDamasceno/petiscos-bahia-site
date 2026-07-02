import CategoryTitle from "./CategoryTitle.jsx";
import Card from "./Card.jsx";

export default function MenuSection({ id, title, icon, products, columns = 3, onOpenProduct }) {
  const gridCols =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section id={id} className="py-10">
      <CategoryTitle icon={icon}>{title}</CategoryTitle>
      <div className={`grid grid-cols-1 ${gridCols} gap-5`}>
        {products.map((p, i) => (
          <Card key={p.id} product={p} delay={(i % 6) * 60} onOpen={onOpenProduct} />
        ))}
      </div>
    </section>
  );
}
