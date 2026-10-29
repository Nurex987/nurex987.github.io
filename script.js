const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");

function closeNavigation() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
  navigation.classList.remove("is-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
  navigation.classList.toggle("is-open", !isOpen);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNavigation);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    closeNavigation();
    menuToggle.focus();
  }
});

document.querySelector("#current-year").textContent = new Date().getFullYear();

const contactForm = document.querySelector("#contact-form");
const feedback = document.querySelector("#form-feedback");
const draftResult = document.querySelector("#draft-result");
const draftField = document.querySelector("#message-draft");
const copyButton = document.querySelector("#copy-draft");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const values = new FormData(contactForm);
  const name = values.get("name").trim();
  const email = values.get("email").trim();
  const subject = values.get("subject").trim();
  const message = values.get("message").trim();

  draftField.value = `From: ${name} (${email})\nSubject: ${subject}\n\n${message}`;
  draftResult.hidden = false;
  feedback.textContent = "Your draft is ready. Nothing was sent or saved. Copy it below and send it through GitHub while email contact is being set up.";
  feedback.hidden = false;
});

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(draftField.value);
    feedback.textContent = "Draft copied to your clipboard. Nothing was sent; you can paste it into a message on GitHub.";
  } catch {
    draftField.focus();
    draftField.select();
    feedback.textContent = "The draft is selected. Press Ctrl+C (or Command+C) to copy it, then paste it into a message on GitHub.";
  }
  feedback.hidden = false;
});
