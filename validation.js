function validarFormulario() {
    // Obter os valores dos campos
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    // Limpar mensagens de erro anteriores
    document.getElementById('nomeError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('mensagemError').textContent = '';

    var isValid = true; // Para verificar se o formulário está válido

    // Validar campo Nome
    if (nome.trim() === "") {
        document.getElementById('nomeError').textContent = "O campo 'Nome completo' é obrigatório.";
        isValid = false;
    }

    // Validar campo E-mail
    if (email.trim() === "") {
        document.getElementById('emailError').textContent = "O campo 'E-mail' é obrigatório.";
        isValid = false;
    } else {
        // Validar formato do e-mail usando regex
        var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            document.getElementById('emailError').textContent = "Por favor, insira um e-mail válido.";
            isValid = false;
        }
    }

    // Validar campo Mensagem
    if (mensagem.trim() === "") {
        document.getElementById('mensagemError').textContent = "O campo 'Mensagem' é obrigatório.";
        isValid = false;
    }

    // Impedir o envio se algum campo for inválido
    if (!isValid) {
        return false;
    }
    
    // Salvar os dados no localStorage
    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);
    localStorage.setItem("mensagem", mensagem);

    alert("Formulário enviado com sucesso! Retornaremos o mais breve possível.");

    // Caso todos os campos sejam preenchidos corretamente, o formulário será enviado
    return true;
}

// Função para preencher os campos com os dados armazenados
window.onload = function() {
    if (localStorage.getItem("nome")) {
        document.getElementById('nome').value = localStorage.getItem("nome");
    }
    if (localStorage.getItem("email")) {
        document.getElementById('email').value = localStorage.getItem("email");
    }
    if (localStorage.getItem("mensagem")) {
        document.getElementById('mensagem').value = localStorage.getItem("mensagem");
    }
}
