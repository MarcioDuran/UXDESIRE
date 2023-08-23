// Seletor de elementos
const text = document.querySelector(".text");
const language = document.querySelector(".language");
const translateButton = document.querySelector(".tradutor");

// Função para traduzir o texto
function translateText(selectedLanguage) {
  const textToTranslate = text.textContent;

  const translatedText = googleTranslate.translate(textToTranslate, {
    from: "pt-BR",
    to: selectedLanguage,
  });

  text.textContent = translatedText;
}

// Inicializa a API do Google Translate
const googleTranslate = new google.translate.TranslateElement({}, 'google-translate-element');
googleTranslate.showBanner(false);

// Evento de clique para o botão de tradução
translateButton.addEventListener("click", function() {
  const selectedLanguage = language.value;
  translateText(selectedLanguage);
});

// Inicializa o idioma padrão
language.value = "en";
translateText(language.value);
