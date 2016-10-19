class View {
    
    constructor(elementoRaiz) {
        this._elementoRaiz = elementoRaiz;
    }
    
    update(mensagem) {
        this._elementoRaiz.innerHTML = this._template(mensagem);
    }
    
    _template() {
        throw new Error('o método _template deve ser implementado');
    }
}


