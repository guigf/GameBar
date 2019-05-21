/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.valueproject.praticaMS;


import br.com.valueproject.praticaMS.model.Mentor;
import br.com.valueproject.praticaMS.service.EmailService;
import br.com.valueproject.praticaMS.service.MentorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MentoresController {
    
    @Autowired
	private MentorService service;

    @Autowired
	private EmailService emailService;
	
	
    @RequestMapping("/")
	public String index(){
		return "index";
        }

	@RequestMapping("listamentores")
	public String listaMentores(Model model){
		
		MentorService mentores = service;
		
		model.addAttribute("mentores", mentores.obterTodos());
		
		return "listamentores";
        }
	
	@RequestMapping(value = "salvar", method = RequestMethod.POST )
	public String salvar(@RequestParam("nome") String nome, @RequestParam("email")String email, 
			@RequestParam("telefone") String telefone, Model model){
		
		Mentor novoMentor = new Mentor(nome, email, telefone);
						
		service.salvar(novoMentor);
				
		Iterable<Mentor> mentores = service.obterTodos();
		model.addAttribute("mentores", mentores);

		emailService.enviar(nome, email);
		
		return "listamentores";
	}	
	
}

        
   