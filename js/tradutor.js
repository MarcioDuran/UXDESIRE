// Seletor de elementos
const text = document.querySelector(".text");
const language = document.querySelector(".language");
const translateButton = document.querySelector(".tradutor");

// Inicializa a API do Google Translate
const googleTranslate = new google.translate.TranslateElement({}, 'google-translate-element');
googleTranslate.showBanner(false);

// Função para traduzir o texto
function translateText(selectedLanguage) {
  // Obtém o texto a ser traduzido
  const textToTranslate = text.textContent;

  // Realiza a tradução do texto
  googleTranslate.translate(textToTranslate, "pt-BR", selectedLanguage, function(result) {
    // Atualiza o texto com a tradução
    text.textContent = result.translation;
  });
}

// Evento de clique para o botão de tradução
translateButton.addEventListener("click", function() {
  // Obtém o idioma selecionado
  const selectedLanguage = language.value;

  // Realiza a tradução do texto
  translateText(selectedLanguage);
});

// Inicializa o idioma padrão
language.value = "en";
translateText(language.value);
