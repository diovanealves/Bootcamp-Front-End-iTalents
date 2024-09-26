import { useState } from "react";
import "./App.css";
import { CalculateIMC } from "./calculateIMC";

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [imcResult, setImcResult] = useState(null);
  const [classification, setClassification] = useState("");
  const imcCalculator = new CalculateIMC(height, weight);

  function handleSubmit(e) {
    e.preventDefault();
    setImcResult(imcCalculator.calculateIMC());
    setClassification(imcCalculator.classifyIMC());
  }

  return (
    <main className="container">
      <div className="child1">
        <h1>Calculadora de IMC</h1>

        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="height">Altura</label>
          <input
            id="height"
            placeholder="EX: 1.76"
            className="input"
            onChange={(e) => setHeight(e.target.value)}
            required
          />

          <label htmlFor="weight">Peso em KG</label>
          <input
            id="weight"
            placeholder="EX: 22"
            className="input"
            onChange={(e) => setWeight(e.target.value)}
            required
          />

          <button type="submit" className="button">
            Calcular IMC
          </button>
        </form>
      </div>

      {imcResult ? (
        <div className="result">
          <h2>Seu IMC: {imcResult}</h2>
          <p>Classificação: {classification}</p>
        </div>
      ) : (
        <div>
          <h1>Duvidas para utilizar</h1>

          <p>
            • No campo 'Altura', insira sua altura em metros para calcular o
            IMC.
          </p>
          <p>
            • No campo 'Peso', insira seu peso em quilogramas (kg) para calcular
            o IMC.
          </p>
          <p>• Apos isso basta apertar no botão para calcular o seu IMC</p>
        </div>
      )}
    </main>
  );
}

export default App;
