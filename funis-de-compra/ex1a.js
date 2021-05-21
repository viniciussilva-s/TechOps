// Os exercícios abaixo devem ser feitos utilizando o site https://www.americanas.com.br/.
// 1. Desenvolver dois códigos JavaScript (ou seja, “ex1a.js” e “ex1b.js”) para extrair os seguintes dados do
// dataLayer:
// a. Etapa de “Categoria”: quantidade de itens e seus Ids

var categories = [];
dataLayer[0].payload_page_load.publications.contenttop1.component.children.map(function (elm, val) {
    n_category = { "title": elm.title, "id": elm._id };
    if (elm.children != null) {
        elm.children.map(function (item) {
            n_category["alternateText"] = item.alternateText
            n_category["alternateID"] = item._id

        })
    }
    categories.push(n_category)
})
console.log(categories);