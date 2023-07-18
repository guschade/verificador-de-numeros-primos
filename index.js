function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
}

function checkPrime() {
  let number = parseInt(document.getElementById("numberInput").value);

  let result = isPrime(number);

  let output = document.getElementById("output");
  if (result) {
    output.textContent = number + " é um número primo.";
  } else {
    output.textContent = number + " não é um número primo.";
  }
}

function listPrimes() {
  let primes = [];
  for (let number = 1; number <= 1000; number++) {
    if (isPrime(number)) {
      primes.push(number);
    }
  }

  let output = document.getElementById("output");
  output.textContent = "Números primos entre 1 e 1000: " + primes.join(", ");
}

// Adiciona um evento keypress ao campo de entrada
document
  .getElementById("numberInput")
  .addEventListener("keypress", function (event) {
    // Verifica se a tecla pressionada é o Enter (código 13)
    if (event.keyCode === 13) {
      event.preventDefault(); // Impede o envio do formulário
      checkPrime(); // Chama a função checkPrime() quando o Enter é pressionado
    }
  });
