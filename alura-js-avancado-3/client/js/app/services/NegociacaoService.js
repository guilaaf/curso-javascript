class NegociacaoService {
    
    constructor() {
        this._http = new HttpService();
    }
    
    obterTodasNegociacoes() {
        return Promise.all([
            this.obterNegociacoesDaSemana(),
            this.obterNegociacoesDaSemanaAnterior(),
            this.obterNegociacoesDaSemanaRetrasada()
        ])
        .then(resultados => {
            return resultados.reduce((todasNegociacoes, negociacoes) => todasNegociacoes.concat(negociacoes), []);
        })
        .catch(erro => {
            throw new Error(erro);
        });
    }
    
    obterNegociacoesDaSemana() {
        return this._http.get('negociacoes/semana')
                    .then(negociacoes => {
                        return negociacoes.map(item => new Negociacao(new Date(item.data), item.quantidade, item.valor));
                    })
                    .catch(erro => {
                        console.log(erro);
                        throw new Error('Não foi possível obter as negociações da semana');
                    });
    }
    
    obterNegociacoesDaSemanaAnterior() {
        return this._http.get('negociacoes/anterior')
                    .then(negociacoes => {
                        return negociacoes.map(item => new Negociacao(new Date(item.data), item.quantidade, item.valor));
                    })
                    .catch(erro => {
                        console.log(erro);
                        throw new Error('Não foi possível obter as negociações da semana anterior');
                    });
    }
    
    obterNegociacoesDaSemanaRetrasada() {
        return this._http.get('negociacoes/retrasada')
                    .then(negociacoes => {
                        return negociacoes.map(item => new Negociacao(new Date(item.data), item.quantidade, item.valor));
                    })
                    .catch(erro => {
                        console.log(erro);
                        throw new Error('Não foi possível obter as negociações da semana retrasada');
                    });
    }
    
}