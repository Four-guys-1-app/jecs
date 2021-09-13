package com.codeup.capstonestarter.web;

import com.codeup.capstonestarter.data.post.BlogsRepository;
import com.codeup.capstonestarter.data.post.Post;
import org.springframework.web.bind.annotation.GetMapping;
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
    private List<Post> getPosts() {
        return blogsRepository.findAll();
    }

}
