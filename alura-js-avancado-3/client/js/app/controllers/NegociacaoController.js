class NegociacaoController {
    
    constructor() {
        let $ = document.querySelector.bind(document);
        
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        
        this._negociacaoRepository = new Binding(
            new NegociacaoRepository(),
            new NegociacoesView($('#negociacoesView')),
            'adicionar', 'esvaziar', 'ordenar'
        );
        this._mensagem = new Binding(
            new Mensagem(),
            new MensagemView($('#mensagemView')),
            'texto'
        );

        this._ordenacaoAtual = '';
        this._direcaoOrdenacao = 1;
    }
    
    adicionarNegociacao(event) {
        event.preventDefault();
        
        let neg = new Negociacao(this._inputData.value, this._inputQuantidade.value, this._inputValor.value);
        this._negociacaoRepository.adicionar(neg);
        
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._limparFormulario();
    }
    
    importarNegociacoes(event) {
        let service = new NegociacaoService();
        service.obterTodasNegociacoes()
            .then(negociacoes => {
                negociacoes.forEach(neg => this._negociacaoRepository.adicionar(neg));
                this._mensagem.texto = 'Negociações importadas com sucesso';
            })
            .catch(erro => this._mensagem.texto = erro);
    }
    
    limparNegociacoes(event) {
        event.preventDefault();
        
        this._negociacaoRepository.esvaziar();
        this._mensagem.texto = '';
    }
    
    ordenarNegociacoes(campo) {
        this._direcaoOrdenacao = (campo === this._ordenacaoAtual) ? -1 * this._direcaoOrdenacao : 1;
        this._negociacaoRepository.ordenar((a,b) => (a[campo] - b[campo]) * this._direcaoOrdenacao);
        this._ordenacaoAtual = campo;
    }
    
    _limparFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = '1';
        this._inputValor.value = '0.0';
        this._inputData.focus();
    }
}
