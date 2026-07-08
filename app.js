const URL_SENHA = 2018
async function checkPassword() {
    const input = document.getElementById('password').value.trim();
    // O ?t= adiciona o tempo para o navegador não usar a senha antiga salva no cache
    const urlComCache = URL_SENHA + "?t=" + new Date().getTime();
    
    try {
        const response = await fetch(urlComCache);
        const senhaNoGitHub = (await response.text()).trim();
        
        if(input === senhaNoGitHub) {
            document.getElementById('login-screen').style.display = 'none';
            document.getElementById('app-screen').style.display = 'block';
        } else {
            alert("Senha incorreta!");
        }
    } catch (e) {
        alert("Erro ao ler senha. Verifique sua internet.");
    }
}

function calcular() {
    // Calculadora simples conforme sua estratégia
    document.getElementById('result').innerHTML = `
        <div style="margin-top:20px; padding:15px; background:#222; border-radius:8px; border:1px solid #00e676;">
            <p><strong>Entrada sugerida:</strong></p>
            <p>Aposta no Gol: <strong>R$ 70,00</strong></p>
            <p>Aposta no 0x0: <strong>R$ 30,00</strong></p>
        </div>`;
}
