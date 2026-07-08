const SENHA_GITHUB_URL = "https://raw.githubusercontent.com/SEU_USUARIO/SEU_REPOSITORIO/main/senha.txt";

async function checkPassword() {
    const input = document.getElementById('password').value;
    const response = await fetch(SENHA_GITHUB_URL);
    const secret = await response.text();
    if(input === secret.trim()) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('app-screen').style.display = 'block';
    } else { alert("Senha incorreta"); }
}

function calcular() {
    const oddGol = parseFloat(document.getElementById('oddGol').value);
    const odd0x0 = parseFloat(document.getElementById('odd0x0').value);
    // Lógica que discutimos:
    const valorGol = 70; 
    document.getElementById('result').innerHTML = `Aposte R$ ${valorGol} no Gol e R$ 30 no 0x0.`;
}