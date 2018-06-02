'use strict';

System.register(['./controllers/NegociacaoController', './pollyfill/fetch'], function (_export, _context) {
  "use strict";

  var currentInstance, controller;
  return {
    setters: [function (_controllersNegociacaoController) {
      currentInstance = _controllersNegociacaoController.currentInstance;
    }, function (_pollyfillFetch) {}],
    execute: function () {
      controller = currentInstance();


      document.querySelector(".form").onsubmit = controller.adicionarNegociacao.bind(controller);
      document.querySelector("#btnImportar").onclick = controller.importarNegociacoes.bind(controller);
      document.querySelector("#btnApagar").onclick = controller.limparNegociacoes.bind(controller);
    }
  };
});
//# sourceMappingURL=boot.js.map