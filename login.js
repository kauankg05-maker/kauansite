// Botão enviar
const botaoEnviar = document.querySelector('input[type="submit"]');

// Texto cadastrar-se
const cadastrar = document.querySelector('p:last-child');

// Quando clicar em enviar
botaoEnviar.addEventListener('click', function() {
	window.location.href = "tela2.html";
});

// Quando clicar em cadastrar-se
cadastrar.addEventListener('click', function() {
	window.location.href = "tela3.html";
});
