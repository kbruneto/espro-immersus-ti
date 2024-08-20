document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("premio-form");
  const alerta = document.getElementById("alerta");
  const closeBtn = document.querySelector(".close-btn");

  // Função para mostrar o pop-up
  function showPopup() {
    alerta.style.display = "flex"; // Torna o pop-up visível
  }

  // Função para esconder o pop-up
  function hidePopup() {
    alerta.style.display = "none"; // Esconde o pop-up
  }

  // Adiciona o evento de submit ao formulário para mostrar o pop-up
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio real do formulário
    showPopup(); // Mostra o pop-up
  });

  // Adiciona o evento de clique ao botão de fechar para esconder o pop-up
  closeBtn.addEventListener("click", hidePopup);

  // Fecha o pop-up ao clicar fora da caixa de conteúdo
  alerta.addEventListener("click", function (event) {
    if (event.target === alerta) {
      hidePopup();
    }
  });
});
