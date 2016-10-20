class NegociacoesView extends View {
    
    _template(negociacaoRepository) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
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

