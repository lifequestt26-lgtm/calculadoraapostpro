const URL = "https://raw.githubusercontent.com/SEU_USUARIO/calculadora-aposta/main/senha.txt";

async function checkPassword() {
    const input = document.getElementById('password').value.trim();
    // O ?t= força o navegador a baixar a senha real e não usar a antiga do cache
    const response = await fetch(URL + "?t=" + new Date().getTime());
    const senha = (await response.text()).trim();

    if (input === senha) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('app-screen').style.display = 'block';
    } else {
        alert("Senha incorreta");
    }
}