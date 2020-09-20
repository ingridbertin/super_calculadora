//Funcao soma
function soma(a, b) {
  let soma = a + b;
  return soma;
}
//Funcao subtracao
function subtracao(a, b) {
  let subtracao = a - b;
  return subtracao;
}

//Funcao multiplicacao
function multiplicacao(a, b) {
  let multiplicacao = a * b;
  return multiplicacao;
}

//Funcao divisao
function divisao(a, b) {
  let divisao = a / b;
  return divisao;
}

//Funcao potenciacao
function potencia(a) {
  let potencia = a ** 2; // ou math.pow(a,2)
  return potencia;
}
// formata o número no padrão brasileiro, i. e., decimal com vírgula e apenas
// 2 casas decimais
function formatNumber(a) {
  let a_br = a.toFixed(2);
  a_br = new Intl.NumberFormat('pt-BR').format(a_br);
  return a_br;
}

//Calcula o fatorial de um número
function calc_fatorial(num) {
  var temp = num;
  for (var i = 1; i < num; i++) {
    temp *= i;
  }
  num = temp;
  return num;
}
// computa os divisores inteiros de um número
function divisores(n) {
  var cont = 0;
  var divisores_n = [];
  for (i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisores_n[cont] = i;
      cont = cont + 1;
    }
  }
  return divisores_n;
}
