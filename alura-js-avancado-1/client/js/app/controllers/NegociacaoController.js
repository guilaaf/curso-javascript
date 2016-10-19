class NegociacaoController {
    
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._tbody = $('table tbody');
        this._negociacoes = [];
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        
        this._negociacoesView.update(this._negociacoes);
    }
    
    adicionarNegociacao(event) {
        event.preventDefault();
        
        let neg = new Negociacao(this._inputData.value, this._inputQuantidade.value, this._inputValor.value);
        
        this._negociacoes.push(neg);
        this._negociacoesView.update(this._negociacoes);
        this._limparFormulario();
    }
    
    _limparFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = '1';
        this._inputValor.value = '0.0';
        this._inputData.focus();
    }
}
