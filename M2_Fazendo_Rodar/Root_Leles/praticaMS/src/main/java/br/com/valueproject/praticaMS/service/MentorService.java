

package br.com.valueproject.praticaMS.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.valueproject.praticaMS.model.Mentor;
import br.com.valueproject.praticaMS.MentorRepository.MentorRepository;

@Service
public class MentorService {
	
	@Autowired
	private MentorRepository repository;
	
	public Iterable<Mentor> obterTodos(){
		
		Iterable<Mentor> mentores = repository.findAll();
		
		return mentores;
		
	}
	
	
	public void salvar(Mentor mentor){
		repository.save(mentor);
	}

}

