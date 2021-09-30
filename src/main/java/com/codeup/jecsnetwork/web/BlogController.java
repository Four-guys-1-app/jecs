package com.codeup.jecsnetwork.web;

import com.codeup.jecsnetwork.data.post.BlogsRepository;
import com.codeup.jecsnetwork.data.post.Post;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/create")
    private Post createPost(@RequestBody Post newPost) {
        return blogsRepository.save(newPost);
    }

}
