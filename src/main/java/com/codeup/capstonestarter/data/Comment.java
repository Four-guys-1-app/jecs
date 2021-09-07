package com.codeup.capstonestarter.data;

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

    @Column(nullable = false)
    private Long user;

    @Column(nullable = false)
    private Long event;

    @ManyToOne
    private Post post;

    public Comment() {
    }

    public Comment(Long id, String title, String content, Date postedDate, Long user, Long event, Post post) {
        this.id = id;
        this.title = title;
        Content = content;
        this.postedDate = postedDate;
        this.user = user;
        this.event = event;
        this.post = post;
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

    public Long getUser() {
        return user;
    }

    public void setUser(Long user) {
        this.user = user;
    }

    public Long getEvent() {
        return event;
    }

    public void setEvent(Long event) {
        this.event = event;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }
}
