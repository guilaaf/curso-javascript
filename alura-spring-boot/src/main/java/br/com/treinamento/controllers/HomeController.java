package br.com.treinamento.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author Guilherme Lima
 */
@Controller
public class HomeController {
    
    @RequestMapping("/")
    public String index() {
        return "index";
    }

}
