// BÔNUS: utilizando a seguinte URL https://www.wine.com.br/vinhos/tinto/cVINHOS-atTIPO_TINTO-p1.html
// monte dois algoritmos:
// a) Com base no trecho de código document.querySelectorAll(".js-productClick") gere uma lista
// de elementos que possuam “title” como um de seus atributos e que a divisão do número no atributo “dataproduct-sku” por 3 não gere sobra, ou seja, “data-product-sku % 3 == 0”


var lista = [];
for (var item of document.querySelectorAll(".js-productClick")) {
    if ((parseInt(item.getAttribute("data-product-sku")) % 3) == 0 && item.getAttribute("title") != null) {
        lista.push({
            "title": item.getAttribute("title"),
            "sku": item.getAttribute("data-product-sku"),
            "result": parseInt(item.getAttribute("data-product-sku")) / 3
        })
    }
}