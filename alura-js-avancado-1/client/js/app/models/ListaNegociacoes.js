class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];
        Object.freeze(this);
    }
    
    get negociacoes() {
        return this._negociacoes.slice(0);
    }
    
    get total() {
        return this._negociacoes.reduce((total, neg) => total + neg.volume, 0.0);
    }
    
    adicionar(negociacao) {
        if (!(negociacao instanceof Negociacao)) {
            throw new Error('Required type: negociacao');
        }
        return this._negociacoes.push(negociacao);
    }
}