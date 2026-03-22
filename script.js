// Navegação Mobile
const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

// Tema
const themeToggleBtn = document.getElementById("themeToggleBtn");

// Formulário e Modal de Contato
const contactForm = document.getElementById("contactForm");
const successModal = document.getElementById("successModal");
const closeModalBtn = document.getElementById("closeModalBtn");

// Menu hambúrguer
menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Fecha o menu mobile apenas se o usuário clicar em um link <a>
navLinks.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navLinks.classList.remove("active");
  }
});

// Temas
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("darkMode");
  document.body.classList.toggle("lightMode");
});

// Validação e Envio do Formulário
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Captura os valores e remove espaços em branco nas pontas
  const nameVal = document.getElementById("inputName").value.trim();
  const emailVal = document.getElementById("inputEmail").value.trim();
  const msgVal = document.getElementById("inputMessage").value.trim();

  // Verifica se há campos vazios
  if (!nameVal || !emailVal || !msgVal) {
    return alert("Por favor, preencha todos os campos obrigatórios.");
  }

  // Verifica o formato do e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailVal)) {
    return alert("Por favor, insira um e-mail válido.");
  }

  // Limpa o formulário e exibe o modal
  contactForm.reset();
  successModal.style.display = "flex";
});

// Fechamento do Modal de Sucesso
closeModalBtn.addEventListener("click", () => {
  successModal.style.display = "none";
});