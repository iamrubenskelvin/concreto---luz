/* =========================================
FORMULÁRIO WHATSAPP
========================================= */

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e){

  e.preventDefault();

  const nome =
  document.querySelector('input[type="text"]').value;

  const email =
  document.querySelector('input[type="email"]').value;

  const telefone =
  document.querySelector('input[type="tel"]').value;

  const mensagem =
  document.querySelector('textarea').value;

  const texto = `
Olá! Gostaria de solicitar um orçamento.

Nome: ${nome}
Email: ${email}
Telefone: ${telefone}

Projeto:
${mensagem}
  `;

  /* TROQUE PELO NÚMERO REAL */

  const numero = '5511967785993';

  const url =
  `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  window.open(url, '_blank');

});

/* =========================================
EFEITO NAVBAR
========================================= */

window.addEventListener('scroll', function(){

  const navbar =
  document.querySelector('.navbar');

  navbar.classList.toggle(
    'ativo',
    window.scrollY > 50
  );

});