function saldoDeVitorias(vitorias, derrotas) {
  let totalDeVitorias = vitorias - derrotas;
  let nivel = "";

  if (totalDeVitorias <= 10) {
    nivel = "Ferro";
  } else if (totalDeVitorias >= 11 && totalDeVitorias <= 20) {
    nivel = "Bronze";
  } else if (totalDeVitorias >= 21 && totalDeVitorias <= 50) {
    nivel = "Prata";
  } else if (totalDeVitorias >= 51 && totalDeVitorias <= 80) {
    nivel = "Ouro";
  } else if (totalDeVitorias >= 81 && totalDeVitorias <= 90) {
    nivel = "Diamante";
  } else if (totalDeVitorias >= 91 && totalDeVitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  return console.log(
    `O Herói tem saldo de ${totalDeVitorias} vitórias e está no nível de ${nivel}`
  );
}

saldoDeVitorias(150, 10);
