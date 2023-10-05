// Tempo em milissegundos para a transição
const transitionTime = 2000; // 2 segundos

// Função para redirecionar para a próxima tela após o tempo de transição
function redirectToNextScreen() {
    window.location.href = 'index.html'; 
}

// Mostra a tela de transição por um período de tempo e, em seguida, redireciona
setTimeout(redirectToNextScreen, transitionTime);
