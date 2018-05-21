class NegociacaoController {
    
    constructor() {
        let $ = document.querySelector.bind(document);
        
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        
        this._negociacaoRepository = new Binding(
            new NegociacaoRepository(),
            new NegociacoesView($('#negociacoesView')),
            'adicionar', 'esvaziar'
        );
        this._mensagem = new Binding(
            new Mensagem(),
            new MensagemView($('#mensagemView')),
            'texto'
        );
    }
    
    adicionarNegociacao(event) {
        event.preventDefault();
        
        let neg = new Negociacao(this._inputData.value, this._inputQuantidade.value, this._inputValor.value);
        
        this._negociacaoRepository.adicionar(neg);
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        
        this._limparFormulario();
    }
    
    importarNegociacoes(event) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'negociacoes/semana');
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                
            }
        };
        xhr.send();
    }
    
    limparNegociacoes(event) {
        event.preventDefault();
        
        this._negociacaoRepository.esvaziar();
        this._mensagem.texto = '';
    }
    
    _limparFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = '1';
        this._inputValor.value = '0.0';
        this._inputData.focus();
    }
}
