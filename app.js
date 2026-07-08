const URL_SENHA = "https://raw.githubusercontent.com/SEU_USUARIO/SEU_REPOSITORIO/main/senha.txt";

async function checkPassword() {
    const input = document.getElementById('password').value.trim();
    try {
        // O ?nocache força o navegador a buscar a senha nova agora
        const response = await fetch(URL_SENHA + "?nocache=" + new Date().getTime());
        const senhaCerta = (await response.text()).trim();
        
        if(input === senhaCerta) {
            document.getElementById('login-screen').style.display = 'none';
            document.getElementById('app-screen').style.display = 'block';
        } else {
            alert("Senha incorreta!");
        }
    } catch (e) {
        alert("Erro de conexão com GitHub!");
    }
}

function calcular() {
    document.getElementById('result').innerHTML = `
        <div style="margin-top:20px; padding:15px; background:#222; border-radius:8px;">
            <p>Aposta no Gol: <strong>R$ 70,00</strong></p>
            <p>Aposta no 0x0: <strong>R$ 30,00</strong></p>
        </div>`;
}