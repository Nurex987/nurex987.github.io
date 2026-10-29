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
const submitButton = contactForm.querySelector("[type='submit']");

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  submitButton.disabled = true;
  feedback.textContent = "Sending your message…";
  feedback.hidden = false;

  try {
    const values = Object.fromEntries(new FormData(contactForm).entries());
    values._replyto = values.email;

    const response = await fetch("https://formsubmit.co/ajax/alaninurudeen975@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(values),
    });
    const result = await response.json();
    if (!response.ok || !result.success) throw new Error("The form service rejected the message.");

    feedback.textContent = "Thanks! Your message was sent. I'll get back to you soon.";
    contactForm.reset();
  } catch {
    feedback.textContent = "Sorry, your message couldn't be sent. Please email me directly at alaninurudeen975@gmail.com.";
  } finally {
    submitButton.disabled = false;
  }
});
