import "./style.css";

export function Greeting({ name, children }) {
  return (
    <section className="greeting">
      <p>
        Olá, <strong>{name}</strong>!
      </p>
      <p>{children}</p>
    </section>
  );
}
