class NegociacoesView extends View {
    
    _template(lista) {
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
                ${lista.negociacoes.map(item => `
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
                <td>${lista.total}</td>
            </tfoot>
        </table>
        `;
    }
}

