// Scroll suave para links do menu
const menuLinks = document.querySelectorAll('nav a');

menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});


// Fade-in das seções
const sections = document.querySelectorAll('section');

function checkSections() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < triggerBottom) {
      section.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkSections);
window.addEventListener('load', checkSections);



// Seleciona o formulário e a div de mensagens
const form = document.querySelector("form");
const msg = document.getElementById("msg");

// Função para mostrar mensagens
function mostrarMensagem(texto, tipo) {
    msg.textContent = texto;
    msg.style.padding = "10px";
    msg.style.marginTop = "15px";
    msg.style.borderRadius = "8px";

    if (tipo === "erro") {
        msg.style.backgroundColor = "#ffdddd";
        msg.style.color = "#d8000c";
        msg.style.border = "1px solid #d8000c";
    } else {
        msg.style.backgroundColor = "#ddffdd";
        msg.style.color = "#4f8a10";
        msg.style.border = "1px solid #4f8a10";
    }
}

// Evento de envio do formulário
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Impede envio automático

    // Pega valores dos campos
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Validação básica
    if (nome === "" || email === "" || mensagem === "") {
        mostrarMensagem("⚠️ Por favor, preencha todos os campos.", "erro");
        return;
    }

    // Validação de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        mostrarMensagem("⚠️ Digite um e-mail válido.", "erro");
        return;
    }

    // Se tudo estiver certo
    mostrarMensagem("✅ Obrigado! Sua mensagem foi enviada.", "sucesso");
    form.reset(); // limpa os campos
});



// Voltar ao topo
const topoBtn = document.getElementById('topo');

window.addEventListener('scroll', () => {
  if(window.scrollY > 400) {
    topoBtn.style.display = 'block';
  } else {
    topoBtn.style.display = 'none';
  }
});

topoBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});