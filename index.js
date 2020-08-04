const Algorithmia = require("algorithmia");
const data = require('./sentimentos.json')


function ListFeelings(object){
    Algorithmia.client("simaWHJ74dK0KqN5pk1+vIF51tS1")
    .algo("nlp/SentimentAnalysis/1.0.5?timeout=300") // timeout is optional
    .pipe(object)
    .then(function(response) {
        var response = response.get();
        response.map(result => {
            const sad = result.sentiment < 0
            if (sad){
                console.log(`Você provavelmente está triste; Sentimento:${result.sentiment}::`);
                console.log(`Frase: ${result.document}. \n`);
                console.log('------------------------------------------------------- \n');
            }
            else {
                console.log(`Você provavelmente está Feliz; Sentimento:${result.sentiment}::`);
                console.log(`Frase: ${result.document}. \n`);
                console.log('------------------------------------------------------- \n');
            }
        })
        
    });
}

ListFeelings(data)