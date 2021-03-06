import {DateConverter} from '../helpers/DateConverter';

export class Negociacao {

    constructor(data, quantidade, valor) {
        this._data = null;
        this._quantidade = quantidade;
        this._valor = valor;
        
        if (typeof data === "string") {
            this._data = DateConverter.text2Date(data);
        } else if (data instanceof Date) {
            this._data = new Date(data.getTime());
        }
        
        Object.freeze(this);
    }
    
    get data() {
        return new Date(this._data.getTime());
    }
    
    get dataFormatada() {
        return DateConverter.date2Text(this._data);
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
    
    get volume() {
        return this._quantidade * this._valor;
    }
    
    isEqual(outraNegociacao) {
        return JSON.stringify(this) === JSON.stringify(outraNegociacao);
    }
}