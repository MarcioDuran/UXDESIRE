// Importa a API do Google Translate
<script src="https://translate.googleapis.com/translate_a/element.js?hl=pt-BR&sl=pt-BR&tl=en"></script>

/// Seletor de idiomas
const text = document.querySelector(".text");
const language = document.querySelector(".language");
const translateButton = document.querySelector(".tradutor");

// Função para traduzir o texto
function translateText(language) {
  // Obtém o texto a ser traduzido
  const textToTranslate = text.textContent;

  // Realiza a tradução do texto
  const translatedText = googleTranslate.translate(textToTranslate, {
    from: "pt-BR",
    to: language,
  });

  // Atualiza o texto com a tradução
  text.textContent = translatedText;
}

// Eventos
translateButton.addEventListener("click", function() {
  // Obtém o idioma selecionado
  const selectedLanguage = language.value;

  // Realiza a tradução do texto
  translateText(selectedLanguage);
});

// Inicializa o idioma
language.value = "en";
translateText(language.value);
