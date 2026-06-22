function enviarRequisicao(){
    var promptUsuario = document.getElementById("txtPrompt").value;

    if(promptUsuario.trim() === "") {
        alert("Por favor, insira um prompt válido.");
        return;
    }

    document.getElementById("txtResposta").innerText = "Enviando requisição... Aguarde!";

    var url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + API_KEY;
    var payload = {
        contents: [{ parts: [{text: promptUsuario }] }],
    }

    fetch (url, {
        method: "POST",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
    .then(function(response) {return response.json() })
    .then(function(data) {
        var txtResposta = data.candidates[0].content.parts[0].text;
        var respostaFormatada = txtResposta.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
        document.getElementById("txtResposta").innerHTML = respostaFormatada;
    })
    .catch(function(error) {
        document.getElementById("txtResposta").innerText = "Erro ao obter resposta: " + error.message;
    });
}
