export class CalculateIMC {
  constructor(height, weight) {
    this.height = height;
    this.weight = weight;
  }

  calculateIMC() {
    if (this.height === 0 || this.weight === 0) {
      return "Preencha todos os campos";
    }

    const result = this.weight / (this.height * this.height);
    return result.toFixed(2);
  }

  classifyIMC() {
    const imc = this.calculateIMC();

    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
      return "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
      return "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
      return "Obesidade grau 1";
    } else if (imc >= 35 && imc <= 39.9) {
      return "Obesidade grau 2";
    } else {
      return "Obesidade grau 3";
    }
  }
}
