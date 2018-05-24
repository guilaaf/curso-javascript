requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/app'
});

// Start the main app logic.
requirejs(['controllers/NegociacaoController'],
function   (negociacaoController) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
});