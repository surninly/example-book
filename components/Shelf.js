export default function Shelf({ title, children }) {
  return (
    <section className="shelf" aria-label={title}>
      <h2 className="shelf-title">{title}</h2>
      {children}
    </section>
  );
}
