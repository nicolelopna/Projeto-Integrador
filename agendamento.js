document.getElementById('procedimento').addEventListener('change', function() {
    var procedimento = document.getElementById('procedimento').value;
    var outroProcedimentoDiv = document.getElementById('outro-procedimento');

    if (procedimento === 'outro') {
        outroProcedimentoDiv.style.display = 'block';
    } else {
        outroProcedimentoDiv.style.display = 'none';
    }
});

document.getElementById('form-agendamento').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const numero = document.getElementById('numero').value;
    const email = document.getElementById('email').value;
    const data = document.getElementById('data').value;
    const profissional = document.getElementById('profissional').value;
    const procedimento = document.getElementById('procedimento').value;
    const descricao = document.getElementById('descricao') ? document.getElementById('descricao').value : '';
    const hora = document.getElementById('hora').value;

    console.log("Agendamento:", { nome, numero, email, data, profissional, procedimento, descricao, hora });

    alert("Agendamento concluído com sucesso!");
});

document.getElementById('form-agendamento').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const numero = document.getElementById('numero').value;
    
    
    const numeroValido = /^\d{10,11}$/.test(numero);
    
    if (!numeroValido) {
        alert("Número de telefone inválido! Por favor, insira um número com 10 ou 11 dígitos.");
        return; 
    }

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const data = document.getElementById('data').value;
    const profissional = document.getElementById('profissional').value;
    const procedimento = document.getElementById('procedimento').value;
    const hora = document.getElementById('hora').value;

    console.log("Agendamento:", { nome, numero, email, data, profissional, procedimento, hora });

    alert("Agendamento concluído com sucesso!");
});
