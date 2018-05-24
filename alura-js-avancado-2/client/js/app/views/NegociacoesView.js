class NegociacoesView extends View {
    
    _template(negociacaoRepository) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th onclick="controller.ordenarNegociacoes('data')">DATA</th>
                    <th onclick="controller.ordenarNegociacoes('quantidade')">QUANTIDADE</th>
                    <th onclick="controller.ordenarNegociacoes('valor')">VALOR</th>
                    <th onclick="controller.ordenarNegociacoes('volume')">VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${negociacaoRepository.negociacoes.map(negociacao => `
                    <tr>
                        <td>${negociacao.dataFormatada}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.volume}</td>
                    </tr>
                `).join('')}
            </tbody>

            <tfoot>
                <th colspan="3">VOLUME TOTAL</th>
                <td>${negociacaoRepository.total}</td>
            </tfoot>
        </table>
        `;
    }
}

