// Substitua SEU_USUARIO e SEU_REPOSITORIO pelos seus dados reais
const SENHA_URL = "https://raw.githubusercontent.com/SEU_USUARIO/SEU_REPOSITORIO/main/senha.txt";

async function checkPassword() {
    const input = document.getElementById('password').value.trim();
    try {
        // O ?t= adiciona o tempo atual para forçar o navegador a buscar a senha nova
        const response = await fetch(SENHA_URL + "?t=" + new Date().getTime());
        const data = await response.text();
        
        // Limpa qualquer espaço ou quebra de linha do arquivo lido
        const senhaCorreta = data.trim();
        
        if(input === senhaCorreta) {
            document.getElementById('login-screen').style.display = 'none';
            document.getElementById('app-screen').style.display = 'block';
        } else { 
            alert("Senha incorreta. Tente novamente."); 
        }
    } catch (error) {
        alert("Erro ao conectar com servidor. Verifique sua internet.");
    }
}

function calcular() {
    // Lógica de cálculo conforme sua estratégia
    const valorGol = 70;
    const valor0x0 = 30;
    document.getElementById('result').innerHTML = `
        <div style="margin-top:20px; padding:15px; background:#222; border:1px solid #00e676; border-radius:10px;">
            <p><strong>Entrada sugerida:</strong></p>
            <p>Aposta no Gol: <strong>R$ ${valorGol.toFixed(2)}</strong></p>
            <p>Aposta no 0x0: <strong>R$ ${valor0x0.toFixed(2)}</strong></p>
            <p>Total investido: <strong>R$ ${(valorGol + valor0x0).toFixed(2)}</strong></p>
        </div>
    `;
}