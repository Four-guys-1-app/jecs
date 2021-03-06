package com.codeup.jecsnetwork.web;

import com.codeup.jecsnetwork.data.comment.Comment;
import com.codeup.jecsnetwork.data.comment.CommentsRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/comments", headers = "Accept=application/json")
public class CommentsController {

    private final CommentsRepository commentsRepository;

    public CommentsController(CommentsRepository commentsRepository) {
        this.commentsRepository = commentsRepository;
    }

    @GetMapping
    private List<Comment> getAll() { return commentsRepository.findAll(); }

    @GetMapping("/event/{eventId}")
    private List<Comment> getEventComments(@PathVariable Long eventId) {

        try {
            return commentsRepository.findByEventId(eventId);
        }catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return null;
    }

    @GetMapping("/post/{postId}")
    private List<Comment> getPostComments(@PathVariable Long postId) {

        try {
            return commentsRepository.findByPostId(postId);
        }catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return null;
    }

    @PostMapping("/create")
    private Comment createEvent(@RequestBody Comment newComment) {
        try {
            System.out.println(newComment);
            return commentsRepository.save(newComment);
        }catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return null;
    }
}
