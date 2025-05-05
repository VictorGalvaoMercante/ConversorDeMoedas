async function converter() {
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const amount = document.getElementById('amount').value;

  try {
    const response = await fetch(`http://localhost:3001/convert?from=${from}&to=${to}&amount=${amount}`)
    const data = await response.json();

    if (response.ok) {
      document.getElementById('resultado').innerText = `Resultado: ${data.converted_amount} ${data.to}`;
    } else {
      document.getElementById('resultado').innerText = `Erro na conversão`;
    }

  } catch (error) {
    document.getElementById('resultado').innerText = "Erro na conexão";
  }
}