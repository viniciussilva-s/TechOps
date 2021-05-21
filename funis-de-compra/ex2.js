// 2. Dependendo do site, podemos identificar a etapa do funil através da URL. Escreva um código que,
// analisando a URL, indique se estamos na etapa “home”, “categoria” ou “produto”
var controller = false;
window.location.pathname.split("/").map(function (url) {
    if (url == "categoria") {
        controller = true;
    } else {
        if (controller == true) {
            console.log(url);
        }
    }

})