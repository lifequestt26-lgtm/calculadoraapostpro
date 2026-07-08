// ATENÇÃO: Substitua os campos abaixo pelos seus dados do GitHub
const USER =2026 
const REPO = "calculadora-aposta-pro";
const SENHA_FILE = "senha.txt";

const SENHA_URL = `https://raw.githubusercontent.com/${USER}/${REPO}/main/${SENHA_FILE}?nocache=${new Date().getTime()}`;

async function checkPassword() {
    const input = document.getElementById('password').value;
    try {
        const response = await fetch(SENHA_URL);
        const secret = await response.text();
        
        if(input === secret.trim()) {
            document.getElementById('login-screen').style.display = 'none';
            document.getElementById('app-screen').style.display = 'block';
        } else { 
            alert("Senha incorreta, tente novamente."); 
        }
    } catch (error) {
        alert("Erro de conexão. Verifique se o GitHub está online.");
    }
}

function calcular() {
    const valorGol = 70;
    const valor0x0 = 30;
    document.getElementById('result').innerHTML = `
        <div style="background:#333; padding:10px; border-radius:5px;">
            <p><strong>Entrada sugerida:</strong></p>
            <p>Aposta no Gol: <strong>R$ ${valorGol.toFixed(2)}</strong></p>
            <p>Aposta no 0x0: <strong>R$ ${valor0x0.toFixed(2)}</strong></p>
            <p>Total: R$ ${(valorGol + valor0x0).toFixed(2)}</p>
        </div>
    `;
}
