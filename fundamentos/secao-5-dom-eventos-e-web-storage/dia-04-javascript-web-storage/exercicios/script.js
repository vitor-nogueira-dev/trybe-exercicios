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

 
};
