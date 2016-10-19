class MensagemView extends View {
    
    _template(mensagem) {
        return mensagem.texto ? `<p class="alert alert-info">${mensagem.texto}</p>` : '';
    }
}


