import {currentInstance} from './controllers/NegociacaoController';
import {} from './pollyfill/fetch';

let controller = currentInstance();

document.querySelector(".form").onsubmit = controller.adicionarNegociacao.bind(controller);
document.querySelector("#btnImportar").onclick = controller.importarNegociacoes.bind(controller);
document.querySelector("#btnApagar").onclick = controller.limparNegociacoes.bind(controller);

