package com.codeup.capstonestarter.data.event;

import com.codeup.capstonestarter.data.EventDates;
import com.codeup.capstonestarter.data.comment.Comment;
import com.codeup.capstonestarter.data.location.Location;
import com.codeup.capstonestarter.data.type.Type;
import com.codeup.capstonestarter.data.user.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;

@Entity
@Table(name = "events")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private Date dateCreated;

    @Column(nullable = false)
    private String description;

    @ManyToOne
    private Type type;

    @OneToOne
    private Location location;

    @Column(nullable = false)
    private char outdoor;

    @OneToMany(mappedBy = "event", cascade = CascadeType.REMOVE)
    @JsonIgnoreProperties("event")
    private Collection<Comment> comments;

    @OneToMany(mappedBy = "event", cascade = CascadeType.REMOVE)
    @JsonIgnoreProperties("events")
    private Collection<EventDates> eventDates;

    // Who created the event
    @ManyToOne
    @JsonIgnoreProperties("events")
    private User user;

    @ManyToMany(
            fetch = FetchType.LAZY,
            cascade = {CascadeType.MERGE, CascadeType.DETACH, CascadeType.PERSIST, CascadeType.REFRESH},
            targetEntity = User.class)
    @JoinTable(
            name="user_subEvents",
            joinColumns = {@JoinColumn(name = "sub_event_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name="user_id", nullable = false, updatable = false)},
            foreignKey = @ForeignKey(ConstraintMode.CONSTRAINT),
            inverseForeignKey = @ForeignKey(ConstraintMode.CONSTRAINT)
    )
    @JsonIgnoreProperties("events")
    private Collection<User> users;


    public Event() {}

    public Event(Long id, String title, Date dateCreated, String description, Type type, Location location, char outdoor, Collection<Comment> comments, Collection<EventDates> eventDates, User user, Collection<User> users) {
        this.id = id;
        this.title = title;
        this.dateCreated = dateCreated;
        this.description = description;
        this.type = type;
        this.location = location;
        this.outdoor = outdoor;
        this.comments = comments;
        this.eventDates = eventDates;
        this.user = user;
        this.users = users;
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

    public Date getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public char getOutdoor() {
        return outdoor;
    }

    public void setOutdoor(char outdoor) {
        this.outdoor = outdoor;
    }

    public Collection<Comment> getComments() {
        return comments;
    }

    public void setComments(Collection<Comment> comments) {
        this.comments = comments;
    }

    public Collection<EventDates> getEventDates() {
        return eventDates;
    }

    public void setEventDates(Collection<EventDates> eventDates) {
        this.eventDates = eventDates;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Collection<User> getUsers() {
        return users;
    }

    public void setUsers(Collection<User> users) {
        this.users = users;
    }
}
