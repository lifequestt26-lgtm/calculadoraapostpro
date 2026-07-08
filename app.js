function calcular() {
    // Valores fixos da sua estratégia
    const valorGol = 70;
    const valor0x0 = 30;
    
    document.getElementById('result').innerHTML = `
        <div style="margin-top:20px; padding:15px; background:#222; border-radius:8px; border:1px solid #00e676;">
            <p><strong>Entrada sugerida:</strong></p>
            <p>Aposta no Gol: <strong>R$ ${valorGol.toFixed(2)}</strong></p>
            <p>Aposta no 0x0: <strong>R$ ${valor0x0.toFixed(2)}</strong></p>
            <p>Total investido: <strong>R$ ${(valorGol + valor0x0).toFixed(2)}</strong></p>
        </div>
    `;
}