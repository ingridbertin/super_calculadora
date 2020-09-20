//inputs dos resultados
let val_soma = document.querySelector('#disabled_soma');
let val_subtracao1 = document.querySelector('#disabled_subtracao1');
let val_subtracao2 = document.querySelector('#disabled_subtracao2');
let val_multiplicacao = document.querySelector('#disabled_multiplicacao');
let val_divisao1 = document.querySelector('#disabled_divisao1');
let val_divisao2 = document.querySelector('#disabled_divisao2');
let quadrado_a = document.querySelector('#quadrado_a');
let quadrado_b = document.querySelector('#quadrado_b');
let fatorial_a = document.querySelector('#fatorial_a');
let fatorial_b = document.querySelector('#fatorial_b');
let divisoresa = document.querySelector('#divisor_a');
let divisoresb = document.querySelector('#divisor_b');
let button = document.querySelector('.btn');

button.addEventListener('click', function () {
  //Inicio pegar os inputs a e b já convertendo para número
  var a = Number(document.getElementById('primeiro_numero').value);
  var b = Number(document.getElementById('segundo_numero').value);
  val_soma.value = `${formatNumber(soma(a, b))}`;
  val_subtracao1.value = `${formatNumber(subtracao(a, b))}`;
  val_subtracao2.value = `${formatNumber(subtracao(b, a))}`;
  val_multiplicacao.value = `${formatNumber(multiplicacao(a, b))}`;
  val_divisao1.value = `${formatNumber(divisao(a, b))}`;
  val_divisao2.value = `${formatNumber(divisao(b, a))}`;
  quadrado_a.value = `${formatNumber(potencia(a))}`;
  quadrado_b.value = `${formatNumber(potencia(b))}`;
  //Condicao calculo do fatorial
  if (a <= 21) {
    fatorial_a.value = `${calc_fatorial(parseInt(a))}`;
  } else {
    fatorial_a.value = 'Número muito grande';
  }
  if (b <= 21) {
    fatorial_b.value = `${calc_fatorial(parseInt(b))}`;
  } else {
    fatorial_b.value = 'Número muito grande';
  }
  //computo dos divisores de um numero
  divisoresa.value = `${divisores(parseInt(a)).join()} (${
    divisores(parseInt(a)).length
  })`;
  divisoresb.value = `${divisores(parseInt(b)).join()} (${
    divisores(parseInt(b)).length
  })`;
});
