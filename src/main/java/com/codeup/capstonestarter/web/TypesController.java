package com.codeup.capstonestarter.web;

import com.codeup.capstonestarter.data.type.TypesRepository;
import com.codeup.capstonestarter.data.type.Type;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/eventTypes", headers = "Accept=application/json")
public class TypesController {

    private final TypesRepository typesRepository;

    public TypesController(TypesRepository eventsTypeRepository) {this.typesRepository = eventsTypeRepository;}


    @GetMapping
    private List<Type> getAll() {
        return typesRepository.findAll();
    }

    @GetMapping("{id}")
    private Type getById(@PathVariable Long id) {
        try {
            return typesRepository.findById(id).get();

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return null;
    }

//    @GetMapping
//    private Type getByName(){
//        try {
////            return typesRepository.find().get();
//
//        } catch (Exception e) {
//            System.out.println(e.getMessage());
//        }
//        return null;

//    }

}
