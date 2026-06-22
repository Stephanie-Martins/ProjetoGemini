const { formatarResposta, validarPrompt } = require("./utils");

describe("formatarResposta", () => {
    test("converte **texto** em negrito", () => {
        expect(formatarResposta("O **Brasil** venceu!")).toBe("O <strong>Brasil</strong> venceu!");
    });

    test("retorna texto sem alteração se não houver **", () => {
        expect(formatarResposta("Texto simples")).toBe("Texto simples");
    });
});

describe("validarPrompt", () => {
    test("retorna true quando tem conteúdo", () => {
        expect(validarPrompt("Qual a capital?")).toBe(true);
    });

    test("retorna false quando está vazio", () => {
        expect(validarPrompt("")).toBe(false);
    });
});