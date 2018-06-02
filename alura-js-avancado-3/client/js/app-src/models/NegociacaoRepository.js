import {Negociacao} from './Negociacao';

export class NegociacaoRepository {
    
    constructor() {
        this._negociacoes = [];
    }
    
    get negociacoes() {
        return [].concat(this._negociacoes);
    }
    
    get total() {
        return this._negociacoes.reduce((total, neg) => total + neg.volume, 0.0);
    }
    
    contains(negociacao) {
        return this._negociacoes.some(neg => neg.isEqual(negociacao));
    }
    
    adicionar(negociacao) {
        this._negociacoes.push(negociacao);
    }
    
    esvaziar() {
        this._negociacoes.length = 0;
    }
    
    ordenar(criterio) {
        this._negociacoes.sort(criterio); 
    }
    
}


