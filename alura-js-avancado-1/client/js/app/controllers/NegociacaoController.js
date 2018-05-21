class NegociacaoController {
    
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        
        this._lista = new ListaNegociacoes();
        this._mensagem = new Mensagem();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._mensagemView = new MensagemView($('#mensagemView'));
        
        this._negociacoesView.update(this._lista);
    }
    
    adicionarNegociacao(event) {
        event.preventDefault();
        
        let neg = new Negociacao(this._inputData.value, this._inputQuantidade.value, this._inputValor.value);
        
        this._lista.adicionar(neg);
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        
        this._negociacoesView.update(this._lista);
        this._mensagemView.update(this._mensagem);
        
        this._limparFormulario();
    }
    
    _limparFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = '1';
        this._inputValor.value = '0.0';
        this._inputData.focus();
    }
}
