class NegociacaoController {
    
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoes = [];
    }
    
    adicionarNegociacao(event) {
        event.preventDefault();
        
        let data = new Date(this._inputData.value.split('-'));
        let neg = new Negociacao(data, this._inputQuantidade.value, this._inputValor.value);
        this._negociacoes.push(neg);
        
        console.log(this._negociacoes);
    }
    
}
