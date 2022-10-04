window.onload = function () {
  let paragrafo = document.querySelector(".text");

  let corFundo = document.querySelector("select", 'name = "background-color"');
  corFundo.addEventListener("change", function () {
    let corSelecionada = this.selectedOptions[0];
    paragrafo.style.backgroundColor = corSelecionada.value;
   
    localStorage.setItem("background-color", corSelecionada.value);
  });

  let corTexto = document.querySelector("#cor-text");
  corTexto.addEventListener("change", function () {
    let corTextoSelecionada = this.selectedOptions[0];
    paragrafo.style.color = corTextoSelecionada.value;

    localStorage.setItem("text-color", corTextoSelecionada.value);
  });

  let tamanhoFonte = document.querySelector("#font-size");
  tamanhoFonte.addEventListener("change", function () {
    paragrafo.style.fontSize = `${tamanhoFonte.value}px`;

    localStorage.setItem("font-size", `${tamanhoFonte.value}px`);
  });

  let alturaLinhas = document.querySelector("#line-height");
  alturaLinhas.addEventListener("change", function () {
    paragrafo.style.lineHeight = `${alturaLinhas.value}px`;

    localStorage.setItem("line-height", `${alturaLinhas.value}px`);
  });

  let fonteTexto = document.querySelector("#tipo-fonte");
  fonteTexto.addEventListener("change", function () {
    paragrafo.style.fontFamily = `${fonteTexto.value}`;

    localStorage.setItem("font-family", fonteTexto.value);
  });


  let valueBackground = localStorage.getItem("background-color");
  paragrafo.style.backgroundColor = valueBackground;

  let valueColorText = localStorage.getItem("text-color");
  paragrafo.style.color = valueColorText;

  let valueFontSize = localStorage.getItem("font-size");
  paragrafo.style.fontSize = valueFontSize;

  let valueLineHeight = localStorage.getItem("line-height");
  paragrafo.style.lineHeight = valueLineHeight;

  let valueFontFamily = localStorage.getItem("font-family");
  paragrafo.style.fontFamily = valueFontFamily;
};
