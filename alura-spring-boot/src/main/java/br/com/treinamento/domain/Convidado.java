package br.com.treinamento.domain;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 *
 * @author Guilherme Lima
 */
@Entity(name = "convidado")
public class Convidado implements Serializable {
    @Id
    @GeneratedValue
    private Long id;
    private String nome;
    private String email;
    private String telefone;

    public Convidado() {
    }

    public Convidado(String nome, String email, String telefone) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getEmail() {
        return email;
    }

    public String getTelefone() {
        return telefone;
    }
    
}
