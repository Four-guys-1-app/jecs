package com.codeup.capstonestarter.web;

import com.codeup.capstonestarter.data.event.Event;
import com.codeup.capstonestarter.data.post.BlogsRepository;
import com.codeup.capstonestarter.data.post.Post;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/blogs", headers = "Accept=application/json")
public class BlogController {

    private final BlogsRepository blogsRepository;

    public BlogController(BlogsRepository blogsRepository) {
        this.blogsRepository = blogsRepository;
    }


    @GetMapping
    private List<Post> getAll() {
        return blogsRepository.findAll();
    }

    @GetMapping("/postByType/{id}")
    private List<Post> getByType(@PathVariable Long id) {
        try {
            return blogsRepository.findByType(id);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return null;
    }

    @GetMapping("{id}")
    private Post getById(@PathVariable Long id) {
        try {
            return blogsRepository.findById(id).get();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return null;
    }

}
