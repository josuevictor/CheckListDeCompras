const Lista = [

]


function insereItem(item){
    Lista.push(item);
}

function removeItem(indice){
    Lista.splice(indice, 1)
}



insereItem('cenoura');
insereItem('beterraba');
insereItem('abóbora');
console.log(Lista)

removeItem(1)
console.log(Lista)


