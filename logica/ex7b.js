// BÔNUS: utilizando a seguinte URL https://www.wine.com.br/vinhos/tinto/cVINHOS-atTIPO_TINTO-p1.html
// monte dois algoritmos:

// b) Extraia do dataLayer uma lista com todas as entradas que possuam “event” valendo “xhr response” e que
// o campo “requestBody” não seja null ou undefined

var new_dataLayer = [];

dataLayer.map(function (elm, val) {
    if (typeof (elm) == "object") {
        if (elm.event == "xhr response" && elm.event != "undefined") {
            if (typeof (elm.requestBody) == "object" && elm.requestBody != null) {
                new_dataLayer.push(elm);
            }
        }
    }
})
