const items = [
    {
        item: 'Molho de tomate',
        price: 300
    },
    {
        item: 'Macarrao',
        price: 200
    }
]


const Checklist = {
    insereItem(item){
        document.querySelector('#btnAdicionar');
        console.log('adicionou');

        DOM.addItem()
    },
    
    /*removeItem(indice){
        document.querySelector('#btnRemover');
        console.log('Removeu');
        Lista.splice(indice, 1);
    }*/
}


const DOM = {
   addItem(items, index){
        const tr = document.querySelector('tr')
        tr.innerHTML = DOM.innerHTMLList()
   },

   innerHTMLList(){
       const html = `
        <td class="description">Molho de tomate</td>
        <td class="description">Macarrao</td>
       `
       return html
   }

}




