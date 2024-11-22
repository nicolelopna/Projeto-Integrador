document.getElementById('form-agendamento').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const numero = document.getElementById('numero').value;
    const email = document.getElementById('email').value;
    const data = document.getElementById('data').value;
    const profissional = document.getElementById('profissional').value;
    const procedimento = document.getElementById('procedimento').value;
    const hora = document.getElementById('hora').value;

    console.log("Agendamento:", { nome, numero, email, data, profissional, procedimento, hora });

    alert("Agendamento concluído com sucesso!");
});
