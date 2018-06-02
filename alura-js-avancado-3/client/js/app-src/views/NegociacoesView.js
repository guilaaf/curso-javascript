import {View} from './View';
import {currentInstance} from '../controllers/NegociacaoController';

export class NegociacoesView extends View {
    
    constructor(elemento) {
        super(elemento);
        
        elemento.addEventListener('click', evt => {
            if (evt.target.nodeName === 'TH') {
                currentInstance().ordenarNegociacoes(evt.target.textContent.toLowerCase());
            }
        });
    }
    
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

