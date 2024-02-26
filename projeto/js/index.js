const Calculadora = require("./calculadora.js");
// import { Calculadora  } from "./projeto/calculadora";

// EXECUTAR A NOSSA CLASSE - PARA GENTE TESTAR :)
const calculadora = new Calculadora();

calculadora.somar(1);
calculadora.somar(1);
calculadora.somar(1);
calculadora.subtrair(1);
calculadora.subtrair(1);
calculadora.multiplicar(2);
calculadora.multiplicar(2);
calculadora.multiplicar(2);
calculadora.divisao(2);
calculadora.divisao(2);
calculadora.divisao(2);

calculadora.print();

calculadora = null; // libera a memória ocupada pelo objeto calc
