// Os exercícios abaixo devem ser feitos utilizando o site https://www.americanas.com.br/.
// 1. Desenvolver dois códigos JavaScript (ou seja, “ex1a.js” e “ex1b.js”) para extrair os seguintes dados do
// dataLayer:
// b. Etapa de “Carrinho”: ids dos produtos selecionados e valor do carrinho
// https://sacola.americanas.com.br/simple-basket/?cartId=5356176e-c427-416c-b871-40b467545c63
var ecommerce = [];
dataLayer.map(function (list) {
    if (list.event == "pageview_carrinho") {

        ecommerce["faixaValor"] = list.faixaValor;
        ecommerce["totalprice"] = 0.00;
        ecommerce["totalquantity"] = 0;

        list.ecommerce.checkout.products.map(function (prods) {
            ecommerce["totalprice"] += parseFloat(prods.price) * parseInt(prods.quantity);
            ecommerce["totalquantity"] += parseInt(prods.quantity);
            ecommerce.push({
                "id": prods.id,
                "name": prods.name,
                "price": prods.price,
                "quantity": prods.quantity
            });
        })
    }
});
console.log(ecommerce);
