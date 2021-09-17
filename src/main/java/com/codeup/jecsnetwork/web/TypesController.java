package com.codeup.jecsnetwork.web;

import com.codeup.jecsnetwork.data.type.TypesRepository;
import com.codeup.jecsnetwork.data.type.Type;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/types", headers = "Accept=application/json")
public class TypesController {

    private final TypesRepository typesRepository;

    public TypesController(TypesRepository typesRepository) {this.typesRepository = typesRepository;}


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


}
