const frm = document.querySelector("form");
const resultado = document.querySelector("#resultado");
const mensagem = document.querySelector("#mensagem");

frm.addEventListener("submit", (e) => {
  const altura = frm.altura.value;
  const peso = frm.peso.value;

  const imc = peso / (altura * altura);

  // const imc = (peso / ((altura * altura) / 1000)).toFixed(2);

  if (altura === "" || altura < 0 || isNaN(altura)) {
    resultado.innerText = "por favor, forneça uma altura válida";
  } else if (peso === "" || peso < 0 || isNaN(peso)) {
    resultado.innerText = "por favor, forneça um peso válido";
  } else {
    resultado.innerText = `Seu imc é ${imc.toFixed(2)}`;
    if (imc < 18.6) {
      mensagem.innerText = "você está abaixo do peso";
    } else if (imc > 18.6 && imc < 24.9) {
      mensagem.innerText = "Peso normal";
    } else if (imc > 24.9) {
      mensagem.innerText = " Você está acima do peso";
    }
  }
  e.preventDefault();
});
