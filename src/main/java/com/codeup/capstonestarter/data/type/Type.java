package com.codeup.capstonestarter.data.type;

import com.codeup.capstonestarter.data.event.Event;
import com.codeup.capstonestarter.data.post.Post;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table (name = "types")
public class Type {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String type;

    @OneToMany(mappedBy = "type")
    @JsonIgnoreProperties("type")
    private Collection<Event> events;

    public Type() {
    }

    @ManyToMany(
            fetch = FetchType.LAZY,
            cascade = {CascadeType.MERGE, CascadeType.DETACH, CascadeType.PERSIST, CascadeType.REFRESH},
            targetEntity = Post.class)
    @JoinTable(
            name="user_type",
            joinColumns = {@JoinColumn(name = "type_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name="post_id", nullable = false, updatable = false)},
            foreignKey = @ForeignKey(ConstraintMode.CONSTRAINT),
            inverseForeignKey = @ForeignKey(ConstraintMode.CONSTRAINT)
    )
    @JsonIgnoreProperties("types")
    private Collection<Post> posts;

    public Type(Long id, String type, Collection<Event> events, Collection<Post> posts) {
        this.id = id;
        this.type = type;
        this.events = events;
        this.posts = posts;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Collection<Event> getEvents() {
        return events;
    }

    public void setEvents(Collection<Event> events) {
        this.events = events;
    }

    public Collection<Post> getPosts() {
        return posts;
    }

    public void setPosts(Collection<Post> posts) {
        this.posts = posts;
    }
}
