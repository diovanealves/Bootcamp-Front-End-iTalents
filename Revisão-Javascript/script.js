import { Calculator } from './calculator.js'

const calculator = new Calculator()

const getInputValue = () => document.getElementById('calculator').value

const processInput = () => {
  const input = getInputValue()

  const operatorMatch = input.match(/[+\-*/]/)

  if(operatorMatch){
    const operator = operatorMatch[0]
    const [num1, num2] = input.split(operator).map(Number)

    switch(operator){
      case "+" : {
        const result = calculator.sum(num1, num2)
        document.getElementById('displayResult').textContent = `O resultado da soma é: ${result}`
        break
      }
      case "-" : {
        const result = calculator.subtract(num1, num2)
        document.getElementById('displayResult').textContent = `O resultado da subtração é: ${result}`
        break
      }
      case "*" : {
        const result = calculator.multiply(num1, num2)
        document.getElementById('displayResult').textContent = `O resultado da multiplicação é: ${result}`
        break
      }
      case "/": {
        try {
          const result = calculator.divide(num1, num2)
          document.getElementById('displayResult').textContent = `O resultado da divisão é: ${result}`
        } catch (error) {
          document.getElementById('displayResult').textContent = error.message
        }
        break
      }
    }
  } else {
    document.getElementById('displayResult').textContent = 'Nenhum operador encontrado'
  }
}

window.processInput = processInput