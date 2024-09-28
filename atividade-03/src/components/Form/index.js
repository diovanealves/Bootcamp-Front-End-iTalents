import "./style.css";

export function Form() {
  return (
    <form className="form">
      <h2>Deixe sua mensagem</h2>

      <div className="form-group">
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" required />
      </div>

      <div className="form-group">
        <label htmlFor="message">Mensagem: </label>
        <textarea type="text" id="message" required />
      </div>

      <button type="submit" className="submit-button">
        Enviar
      </button>
    </form>
  );
}
