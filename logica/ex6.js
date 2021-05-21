// Dada as duas listas abaixo, monte uma terceira contendo apenas os valores repetidos
// • Lista1: [13,21,40,8,37,15,39,41,19,17,3,4,48,27,38,24,47,31,45,10,5,29,11,46,49]
// • Lista2: [6,44,33,17,21,41,13,31,35,10,48,8,49,45,25,50,5,4,18,34,26,1,3,32,42]
var lista = {
    "lista1": [13, 21, 40, 8, 37, 15, 39, 41, 19, 17, 3, 4, 48, 27, 38, 24, 47, 31, 45, 10, 5, 29, 11, 46, 49],
    "lista2": [6, 44, 33, 17, 21, 41, 13, 31, 35, 10, 48, 8, 49, 45, 25, 50, 5, 4, 18, 34, 26, 1, 3, 32, 42],
    "lista3": []
}

lista.lista1.map(function (item) {
    if (lista.lista2.indexOf(item) != -1)
        lista.lista3.push(item)

});
console.log(lista);