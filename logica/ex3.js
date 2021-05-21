
// Com base no código anterior, montar uma função que aceite como parâmetros: start, end e steps. Atenção
// para o fato de que a sequência pode ser decremental agora, ou seja, ao invés de ir de 0 a 100, pode ir de 100
// a 0. Se steps for 0, imprimir erro
// function techOpsPrint(start, end, steps) { ... }
// • start: número inicial da sequência
// • end: número final da sequência
// • steps: de quanto em quanto deverá subir ou descer a sequência, de 2 em 2, de 3 em 3, etc.

function techOpsPrint_controllers(start, end, steps = 1) {
    if (steps != 0) {
        for (let index = start;
            (start < end) ? index <= end : index >= end;
            index = (start < end) ? index + steps : index - steps) {
            let return_string = `${((index % 3) == 0) ? "Tech" : ""}${((index % 5) == 0) ? "Ops" : ""}`;
            console.log((return_string == "") ? index : return_string);
        }
    } else {
        console.log("Step invalido!");
    }

}
techOpsPrint_controllers(100, 0, 1)