import "./style.css";

export function Header({ name }) {
  return (
    <header className="container">
      <h1>Meus filmes favoritos</h1>

      <div className="user-info">
        <p className="user-name">Sejá bem-vindo {name}</p>
        <div className="user-avatar">{name.slice(0, 2).toUpperCase()}</div>
      </div>
    </header>
  );
}
