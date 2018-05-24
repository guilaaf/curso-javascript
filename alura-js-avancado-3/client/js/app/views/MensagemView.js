class MensagemView extends View {
    
    _template(mensagem) {
        if (mensagem && mensagem.texto) {
            return `
                <p class="alert alert-info">
                    <i class="glyphicon glyphicon-exclamation-sign"></i>
                    ${mensagem.texto}
                    <i class="glyphicon glyphicon-remove pull-right"
                          onclick="this.parentElement.style.display='none';"></i>
                </p>
            `;
        } else {
            return '';
        }
    }
}


