document.addEventListener('DOMContentLoaded', () => {
	const botaoEnviar = document.querySelector('input[type="submit"]');
	if (!botaoEnviar) return;

	botaoEnviar.addEventListener('click', (e) => {
		e.preventDefault();
		window.location.href = 'index.html';
	});
});

