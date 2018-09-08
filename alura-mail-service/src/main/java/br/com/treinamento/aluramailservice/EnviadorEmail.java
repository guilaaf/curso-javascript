package br.com.treinamento.aluramailservice;

import org.apache.commons.mail.DefaultAuthenticator;
import org.apache.commons.mail.Email;
import org.apache.commons.mail.EmailException;
import org.apache.commons.mail.SimpleEmail;
import org.springframework.stereotype.Service;

/**
 *
 * @author Guilherme Lima
 */
@Service
public class EnviadorEmail {
    
    public void enviarEmail(String titulo, String texto, String... destinatarios) {
        try {
            Email email = new SimpleEmail();
            email.setHostName("smtp.googlemail.com");
            email.setSmtpPort(465);
            email.setAuthenticator(new DefaultAuthenticator("guilaaf@gmail.com", "xj17!p"));
            email.setSSLOnConnect(true);

            email.setFrom("guilaaf@gmail.com");
            email.setSubject(titulo);
            email.setMsg(texto);
            email.addTo(destinatarios);
            email.send();

        } catch (EmailException e) {
            throw new RuntimeException(e);
        }
    }
    
}
