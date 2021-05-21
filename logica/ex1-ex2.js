
// Desenvolver um algoritmo que imprima uma sequência de número de 0 a 100 seguindo as regras abaixo
// • Caso o número seja divisível por 3, imprimir “Tech” ao invés do número
// • Caso o número seja divisível por 5, imprimir “Ops” ao invés do número
// • Caso o número seja divisível por 3 e 5, imprimir “TechOps” ao invés do número
// • Caso contrário, imprimir o próprio número

for (let index = 0; index <= 100; index += 1) {
    var return_string = `${((index % 3) == 0) ? "Tech" : ""}${((index % 5) == 0) ? "Ops" : ""}`;
    console.log((return_string == "") ? index : return_string);
}

// Transforme o código do exercício anterior em uma função que aceite como parâmetros: limit e steps. Se
// steps for 0, imprimir erro
// function techOpsPrint(limit, steps) { ... }
// • limit: a partir de 0, até qual número o algoritmo deverá rodar
// • steps: de quanto em quanto deverá subir a sequência, de 2 em 2, de 3 em 3, etc.

function techOpsPrint(limit, steps = 1) {
    if (steps != 0) {
        for (let index = 0; index <= limit; index += steps) {
            var return_string = `${((index % 3) == 0) ? "Tech" : ""}${((index % 5) == 0) ? "Ops" : ""}`;
            console.log((return_string == "") ? index : return_string);
        }
    } else {
        console.log("Step invalido!");
    }
}
techOpsPrint(100, 2)