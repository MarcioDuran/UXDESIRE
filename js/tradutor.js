// Adiciona um botão para traduzir o texto
const translateButton = document.createElement("button");
translateButton.textContent = "Traduzir";
translateButton.addEventListener("click", function() {
  // Obtém o texto a ser traduzido
  const text = document.querySelector(".text").textContent;

  // Obtém o idioma atual
  const language = document.querySelector(".language").value;

  // Obtém a tradução do texto
  const translatedText = dictionary[language][text];

  // Atualiza o texto com a tradução
  document.querySelector(".text").textContent = translatedText;
});

// Adiciona o botão ao documento
document.querySelector(".tradutor").appendChild(translateButton);