// SRP - Uma classe deve ter um, e somente um, motivo para mudar.

// Esse princípio declara que uma classe deve ser especializada em um único assunto
// e possuir apenas uma responsabilidade dentro do software

class Calculator {
  
    add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) throw new Error("Divisão por zero não é permitida.");
    return a / b;
  }
}

class Display {
  showResult(result) {
    console.log("Resultado:", result);
  }

  showError(error) {
    console.error("Erro:", error.message);
  }
}

class CalculatorApp {
  constructor(calculator, display) {
    this.calculator = calculator;
    this.display = display;
  }

  execute(operation, a, b) {
    try {
      let result;
      switch (operation) {
        case "add":
          result = this.calculator.add(a, b);
          break;
        case "subtract":
          result = this.calculator.subtract(a, b);
          break;
        case "multiply":
          result = this.calculator.multiply(a, b);
          break;
        case "divide":
          result = this.calculator.divide(a, b);
          break;
        default:
          throw new Error("Operação inválida");
      }
      this.display.showResult(result);
    } catch (error) {
      this.display.showError(error);
    }
  }
}


const calc = new Calculator();
const display = new Display();
const app = new CalculatorApp(calc, display);

app.execute("add", 10, 5);       
app.execute("divide", 8, 0);     
