"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const primaryNavigation = document.querySelector("#primary-navigation");
const currentYear = document.querySelector("#current-year");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

if (currentYear instanceof HTMLSpanElement) {
    currentYear.textContent = String(new Date().getFullYear());
}

if (contactForm instanceof HTMLFormElement && formStatus instanceof HTMLParagraphElement) {
    const nameInput = contactForm.querySelector("#contact-name");
    const emailInput = contactForm.querySelector("#contact-email");
    const messageInput = contactForm.querySelector("#contact-message");
    const submitButton = contactForm.querySelector(".contact-submit");

    if (
        !(nameInput instanceof HTMLInputElement) ||
        !(emailInput instanceof HTMLInputElement) ||
        !(messageInput instanceof HTMLTextAreaElement) ||
        !(submitButton instanceof HTMLButtonElement)
    ) {
        console.error("O formulário de contato está incompleto; não foi possível habilitar a validação.");
    } else {
        // A validação nativa cobre o e-mail; estas regras rejeitam nome ou mensagem só com espaços.
        const updateSubmitButton = () => {
            nameInput.setCustomValidity(nameInput.value.trim() ? "" : "Lorem ipsum dolor sit amet.");
            messageInput.setCustomValidity(
                messageInput.value.trim().length >= 10
                    ? ""
                    : "Lorem ipsum dolor sit amet."
            );
            submitButton.disabled = !contactForm.checkValidity();
        };

        contactForm.addEventListener("input", updateSubmitButton);
        contactForm.addEventListener("change", updateSubmitButton);
        updateSubmitButton();

        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                updateSubmitButton();
                return;
            }

            formStatus.textContent = "Lorem ipsum dolor sit amet.";
        });
    }
}

if (menuToggle instanceof HTMLButtonElement && primaryNavigation instanceof HTMLUListElement) {
    // Mantém o estado acessível do botão sincronizado com a visibilidade do menu.
    const closeMenu = () => {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Lorem Ipsum");
        primaryNavigation.hidden = true;
    };

    const openMenu = () => {
        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute("aria-label", "Lorem Ipsum");
        primaryNavigation.hidden = false;
    };

    menuToggle.addEventListener("click", () => {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        if (isExpanded) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    primaryNavigation.addEventListener("click", (event) => {
        if (event.target instanceof HTMLAnchorElement || event.target instanceof HTMLButtonElement) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
            closeMenu();
            menuToggle.focus();
        }
    });

    closeMenu();
}
