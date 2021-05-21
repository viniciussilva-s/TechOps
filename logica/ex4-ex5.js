
// 4. BÔNUS: reescreva o código do exercício 2 sem qualquer tipo de laço de repetição, ou seja, sem utilizar “for”
// ou “while”. Dica: recursividade
// 5. BÔNUS: reescreva o código anterior sem utilizar variáveis (var, let ou const) :P — ATENÇÃO: parâmetros de
// função não são considerados variáveis

function contador(num, limit, steps = 1) {
    if (num <= limit) {
        if (steps != 0) {
            // var return_string = `${((num % 3) == 0) ? "Tech" : ""}${((num % 5) == 0) ? "Ops" : ""}`;
            console.log((((num % 3) != 0) && ((num % 5) != 0)) ?
                num : `${((num % 3) == 0) ? "Tech" : ""}${((num % 5) == 0) ? "Ops" : ""}`);
            num += steps
            contador(num, limit, steps)
        } else {
            console.log("Step invalido!");
        }
    } else {
        console.log("end");
    }
}
contador(1, 100)
