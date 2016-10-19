class NegociacaoRepository extends Observable {
    
    constructor() {
        super();
        this._negociacoes = [];
    }
    
    get negociacoes() {
        return [].concat(this._negociacoes);
    }
    
    get total() {
        return this._negociacoes.reduce((total, neg) => total + neg.volume, 0.0);
    }
    
    adicionar(negociacao) {
        this._negociacoes.push(negociacao);
        this.notificarListeners();
    }
    
    esvaziar() {
        this._negociacoes.length = 0;
        this.notificarListeners();
    }
    
}


