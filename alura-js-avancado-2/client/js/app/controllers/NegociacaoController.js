class NegociacaoController {
    
    constructor() {
        let $ = document.querySelector.bind(document);
        
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        
        this._negociacaoRepository = new NegociacaoRepository();
        this._negociacaoRepository.adicionarListener(model => this._negociacoesView.update(model)); 
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._negociacaoRepository);
        
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
    }
    
    adicionarNegociacao(event) {
        event.preventDefault();
        
        let neg = new Negociacao(this._inputData.value, this._inputQuantidade.value, this._inputValor.value);
        
        this._negociacaoRepository.adicionar(neg);
        
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._mensagemView.update(this._mensagem);
        
        this._limparFormulario();
    }
    
    limparNegociacoes(event) {
        event.preventDefault();
        
        this._negociacaoRepository.esvaziar();
        
        this._mensagem.texto = '';
        this._mensagemView.update(this._mensagem);
    }
    
    _limparFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = '1';
        this._inputValor.value = '0.0';
        this._inputData.focus();
    }
}
