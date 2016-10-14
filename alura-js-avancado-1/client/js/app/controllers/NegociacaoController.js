class NegociacaoController {
    
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._tbody = $('table tbody');
        this._negociacoes = [];
    }
    
    adicionarNegociacao(event) {
        event.preventDefault();
        
        let neg = new Negociacao(this._inputData.value, this._inputQuantidade.value, this._inputValor.value);
        this._negociacoes.push(neg);
        
        this._adicionarLinhaTabela(neg);
        this._limparFormulario();
    }
    
    _adicionarLinhaTabela(negociacao) {
        let tr = document.createElement('tr');
        let td;

        td = document.createElement('td');
        td.textContent = negociacao.dataFormatada;
        tr.appendChild(td);
        
        td = document.createElement('td');
        td.textContent = negociacao.quantidade;
        tr.appendChild(td);
        
        td = document.createElement('td');
        td.textContent = negociacao.valor;
        tr.appendChild(td);
        
        td = document.createElement('td');
        td.textContent = negociacao.volume;
        tr.appendChild(td);
   
        this._tbody.appendChild(tr);
    }
    
    _limparFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = '1';
        this._inputValor.value = '0.0';
        this._inputData.focus();
    }
}
