document.addEventListener('DOMContentLoaded', function () {
  const operacaoAnterior = document.getElementById('operacao-anterior');
  const operacaoAtual = document.getElementById('operacao-atual');
  const botoesNumeros = document.querySelectorAll('.number');
  const botoesOperacoes = document.querySelectorAll('#botoes-container button:not(.number)');

  
  let operacao = '';
  let operacaoAnt = '';
  let operacaoNova = '';

  botoesNumeros.forEach(botao => {
      botao.addEventListener('click', function () {
          if (operacaoAtual.innerText.includes('.') && this.innerText === '.') return;
          operacaoAtual.innerText += this.innerText;
      });
  });

  botoesOperacoes.forEach(botao => {
      botao.addEventListener('click', function () {
          if (this.innerText === 'C') {
              operacaoAnterior.innerText = '';
              operacaoAtual.innerText = '';
              return;
          }
          
          if (this.innerText === 'CE') {
              operacaoAtual.innerText = '';
              return;
          }

          if (this.innerText === 'DEL') {
              operacaoAtual.innerText = operacaoAtual.innerText.slice(0, -1);
              return;
          }

          if (this.innerText === '=') {
              if (!operacaoAtual.innerText || !operacaoAnterior.innerText) return;
              calcular();
              return;
          }

          if (!operacaoAtual.innerText) return;
          operacao = this.innerText;
          operacaoNova = operacaoAtual.innerText;
          operacaoAtual.innerText = '';
          operacaoAnt = operacaoNova + ' ' + operacao;
          operacaoAnterior.innerText = operacaoAnt;
      });
  });

  function calcular() {
      let resultado;
      const anterior = parseFloat(operacaoAnterior.innerText);
      const atual = parseFloat(operacaoAtual.innerText);
      switch (operacao) {
          case '+':
              resultado = anterior + atual;
              break;
          case '-':
              resultado = anterior - atual;
              break;
          case '*':
              resultado = anterior * atual;
              break;
          case '/':
              resultado = anterior / atual;
              break;
          default:
              return;
      }
      operacaoAtual.innerText = resultado;
      operacaoAnterior.innerText = '';
  }
});


// DEFINIÇÃO DA CLASSE
class Calculadora {
  valorMemoria;
  constructor() {
    this.zerar();
  }

  somar(valorDigitado) {
    this.valorMemoria = this.valorMemoria + valorDigitado;
  }

  subtrair(valorDigitado) {
    this.valorMemoria = this.valorMemoria - valorDigitado;
  }

  multiplicar(valorDigitado) {
    this.valorMemoria = this.valorMemoria * valorDigitado;
  }

  divisao(valorDigitado) {
    if (valorDigitado == 0) {
      console.error("Divisão ilegal por zero");
      return;
    }

    this.valorMemoria = this.valorMemoria / valorDigitado;
  }

  zerar() {
    this.valorMemoria = 0;
  }

  print() {
    console.log("RESULTADO:", this.valorMemoria);
  }
}
module.exports = Calculadora; // exporta a classe Calculadora