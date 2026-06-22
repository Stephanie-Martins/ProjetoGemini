function formatarResposta(texto) {
    return texto.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
}

function validarPrompt(texto) {
    return texto.trim() !== "";
}

module.exports = { formatarResposta, validarPrompt };