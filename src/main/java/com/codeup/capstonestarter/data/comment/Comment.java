package com.codeup.capstonestarter.data.comment;

import com.codeup.capstonestarter.data.event.Event;
import com.codeup.capstonestarter.data.post.Post;
import com.codeup.capstonestarter.data.user.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "comments")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, columnDefinition = "text")
    private String Content;

    @Column(nullable = false)
    private LocalDateTime postedDate;

    @ManyToOne
    @JsonIgnoreProperties("comments")
    private Event event;

    @ManyToOne
    @JsonIgnoreProperties("comments")
    private Post post;

    @ManyToOne
    @JsonIgnoreProperties({"events", "email", "password", "bio", "postalCode", "comments", "posts", "types", "subEvents"})
    private User user;

    public Comment() {
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return Content;
    }

    public void setContent(String content) {
        Content = content;
    }

    public LocalDateTime getPostedDate() {
        return postedDate;
    }

    public void setPostedDate(LocalDateTime postedDate) {
        this.postedDate = postedDate;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
