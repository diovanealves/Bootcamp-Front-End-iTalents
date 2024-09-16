export class Calculator {
  sum(num1, num2){
    return num1 + num2
  }

  subtract(num1, num2){
    return num1 - num2
  }

  multiply(num1, num2){
    return num1 * num2
  }

  divide(num1, num2){
    if (num2 === 0) throw new Error("Divisão por zero não permitida.")

    return num1 / num2
  }
}
