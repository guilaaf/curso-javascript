class NegociacaoService {
    
    obterNegociacoesDaSemana(callback) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'negociacoes/semana');
        xhr.onreadystatechange = () => {
            /* 
             * Possíveis estados da requisição:
             * 
             * 0: requisição não iniciada
             * 1: conexão com o servidor estabelecida
             * 2: requisição recebida
             * 3: processando requisição
             * 4: requisição concluída e resposta pronta
             */
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let resposta = JSON.parse(xhr.responseText);
                    if (resposta) {
                        callback(
                            null,
                            resposta.map(item => new Negociacao(new Date(item.data), item.quantidade, item.valor))
                        );
                    }
                } else {
                    console.log(xhr.responseText);
                    callback(
                        'Não foi possível obter as negociações',
                        null
                    );
                }
            }
        };
        xhr.send();
    }
    
}