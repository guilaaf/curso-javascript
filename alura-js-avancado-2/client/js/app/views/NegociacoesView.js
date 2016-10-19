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
                ${negociacaoRepository.negociacoes.map(item => `
                    <tr>
                        <td>${item.dataFormatada}</td>
                        <td>${item.quantidade}</td>
                        <td>${item.valor}</td>
                        <td>${item.volume}</td>
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

