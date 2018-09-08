package br.com.treinamento.controllers;

import br.com.treinamento.domain.Convidado;
import br.com.treinamento.domain.ConvidadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.view.RedirectView;

/**
 *
 * @author Guilherme Lima
 */
@Controller
public class ConvidadoController {

    @Autowired
    private ConvidadoRepository repository;

    @RequestMapping("/convidados")
    public String listarConvidados(Model model) {
        model.addAttribute("convidados", repository.findAll());
        return "convidados";
    }
    
    @RequestMapping(value = "/convidado", method = RequestMethod.POST)
    public RedirectView salvarConvidado(@RequestParam("nome") String nome,
                                  @RequestParam("email") String email,
                                  @RequestParam("telefone") String telefone) {
        Convidado convidado = new Convidado(nome, email, telefone);
        repository.save(convidado);
        return new RedirectView("/convidados");
    }

}
