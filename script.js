function mostrarResumo() {
  let qtdCapuccino = parseInt(document.getElementById('qtd-capuccino').value) || 0;
  let qtdLatte = parseInt(document.getElementById('qtd-latte').value) || 0;
  let qtdMocha = parseInt(document.getElementById('qtd-mocha').value) || 0;
  let qtdFrapuccino = parseInt(document.getElementById('qtd-frapuccino').value) || 0;

let precoCapuccino = 10.0;
let precoLatte = 9.0;
let precoMocha = 12.0;
let precoFrapuccino = 15.0;



let total = qtdCapuccino * precoCapuccino + qtdLatte * precoLatte + qtdMocha * precoMocha + qtdFrapuccino * precoFrapuccino;

let resumo = `Obrigada por nos escolher!<br>Você pediu:<br>`;
if (qtdCapuccino > 0) resumo += `- ${qtdCapuccino} capuccino(s)<br>`;
if (qtdLatte > 0) resumo += `- ${qtdLatte} latte(s)<br>`;
if (qtdMocha > 0) resumo += `- ${qtdMocha} mocha(s)<br>`;
if (qtdFrapuccino > 0) resumo += `- ${qtdFrapuccino} frapuccino(s)<br>`;
resumo += `<strong>Total: R$ ${total.toFixed(2)}</strong>`;
  document.getElementById("detalhes-pedido").innerHTML = resumo;
}

function limparPedido() {
  document.getElementById('qtd-capuccino').value = 0;
  document.getElementById('qtd-latte').value = 0;
  document.getElementById('qtd-mocha').value = 0;
  document.getElementById('qtd-frapuccino').value = 0;
  document.getElementById('detalhes-pedido').innerHTML = "Seu pedido aparecerá aqui...";
}
