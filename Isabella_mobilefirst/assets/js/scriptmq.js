function mudouTamanho() {
    if (window.innerHeight >=  768) {
        //itens.style.display = 'inline-block'
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}

        function clickMenu() {
            if (itens.style.display == 'block') {
                itens.style.display = 'none'
            } else {
                itens.style.display = 'block'
            }
        }

        
