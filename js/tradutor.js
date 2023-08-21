// script.js
document.addEventListener('DOMContentLoaded', function () {
    const languageSelect = document.getElementById('language-select');
    const applyLanguageButton = document.getElementById('apply-language');

    applyLanguageButton.addEventListener('click', () => {
        const selectedLanguage = languageSelect.value;
        translatePage(selectedLanguage);
    });

    function translatePage(language) {
        // Implement your translation logic here
        // For demonstration purposes, I'm just changing the footer copyright text
        const copyrightText = document.querySelector('.copyright-text p');

        switch (language) {
            case 'en':
                copyrightText.innerHTML = "<br>Copyright &copy; 2023 <br>NFT Marcio Duran spirit of imagination @UxDesire<br><br>Design: <a rel='nofollow' href='https://opensea.io/Marcio-Duran' target='_parent'>Go to OpenSean MarketPlace Marcio Duran</a></p>";
                break;
            case 'pt':
                copyrightText.innerHTML = "<br>Direitos autorais &copy; 2023 <br>NFT Marcio Duran espírito de imaginação @UxDesire<br><br>Design: <a rel='nofollow' href='https://opensea.io/Marcio-Duran' target='_parent'>Ir para OpenSean MarketPlace Marcio Duran</a></p>";
                break;
            case 'es':
                copyrightText.innerHTML = "<br>Derechos de autor &copy; 2023 <br>NFT Marcio Duran espíritu de imaginación @UxDesire<br><br>Design: <a rel='nofollow' href='https://opensea.io/Marcio-Duran' target='_parent'>Ir a OpenSean MarketPlace Marcio Duran</a></p>";
                break;
            default:
                break;
        }
    }
});
