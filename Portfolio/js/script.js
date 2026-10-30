// tive que relembrar de alguma forma JavaScript só pra fazer isso T_T

/*
  Uso de IA: ChatGPT (OpenAI).
  Utilizada para auxiliar na organização do código,
  esclarecer funcionalidades e corrigir possíveis erros.
*/


// MENU
const menuButton = document.getElementById("menuButton");
const mainMenu = document.getElementById("mainMenu");

menuButton.addEventListener("click", function () {
    const isMenuOpen = mainMenu.classList.toggle("menu-open");

    menuButton.setAttribute("aria-expanded", isMenuOpen);

    menuButton.setAttribute(
        "aria-label",
        isMenuOpen ? "Fechar menu" : "Abrir menu"
    );
});

mainMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        mainMenu.classList.remove("menu-open");

        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menu");
    });
});


// hora
function getGreeting(hour) {
    if (hour < 12) {
        return "Bom dia";
    } else if (hour < 18) {
        return "Boa tarde";
    } else {
        return "Boa noite";
    }
}

const currentHour = new Date().getHours();

document.getElementById("greeting").textContent =
    getGreeting(currentHour);

const themeButton = document.getElementById("themeButton");
themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
});


// FORMULÁRIO

const contactForm = document.getElementById("contactForm");
function validateForm() {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const consent = document.getElementById("consent").checked;
    let isFormValid = true;
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";
    document.getElementById("consentError").textContent = "";
    document.getElementById("successMessage").textContent = "";
    if (name === "") {
        document.getElementById("nameError").textContent =
            "Preencha seu nome.";

        isFormValid = false;
    }
    if (email === "") {
        document.getElementById("emailError").textContent =
            "Preencha seu e-mail.";

        isFormValid = false;

    } else if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").textContent =
            "Digite um e-mail válido.";

        isFormValid = false;
    }
    if (message === "") {
        document.getElementById("messageError").textContent =
            "Escreva uma mensagem.";

        isFormValid = false;

    } else if (message.length < 20) {
        document.getElementById("messageError").textContent =
            "A mensagem precisa ter pelo menos 20 caracteres.";

        isFormValid = false;
    }
    if (!consent) {
        document.getElementById("consentError").textContent =
            "É necessário marcar o consentimento.";

        isFormValid = false;
    }

    return isFormValid;
}
contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    if (validateForm()) {

        document.getElementById("successMessage").textContent =
            "Mensagem validada com sucesso! Obrigada pelo contato.";

        contactForm.reset();
    }
});


// ANO
document.getElementById("currentYear").textContent = new Date().getFullYear();