class View {
    
    constructor(elementoRaiz) {
        this._elementoRaiz = elementoRaiz;
    }
    
    update(model) {
        this._elementoRaiz.innerHTML = this._template(model);
    }
    
    _template() {
        throw new Error('o método _template deve ser implementado');
    }
}


