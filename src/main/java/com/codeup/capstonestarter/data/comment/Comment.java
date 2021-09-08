package com.codeup.capstonestarter.data.comment;

import com.codeup.capstonestarter.data.event.Event;
import com.codeup.capstonestarter.data.post.Post;
import com.codeup.capstonestarter.data.user.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "comments")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String Content;

    @Column(nullable = false)
    private Date postedDate;

    @ManyToOne
    @JsonIgnoreProperties("comments")
    private Event event;

    @ManyToOne
    private Post post;

    @ManyToOne
    @JsonIgnoreProperties("comments")
    private User user;

    public Comment() {
    }

    public Comment(Long id, String title, String content, Date postedDate, Event event, Post post, User user) {
        this.id = id;
        this.title = title;
        Content = content;
        this.postedDate = postedDate;
        this.event = event;
        this.post = post;
        this.user = user;
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

    public Date getPostedDate() {
        return postedDate;
    }

    public void setPostedDate(Date postedDate) {
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
