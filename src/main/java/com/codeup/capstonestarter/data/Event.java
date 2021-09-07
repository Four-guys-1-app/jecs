package com.codeup.capstonestarter.data;

import javax.persistence.*;
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

    @Column(nullable = false)
    private Long location;

    @Column(nullable = false)
    private char outdoor;

    @Column(nullable = false)
    private Long owner;

    public Event() {}

    public Event(Long id, String title, Date dateCreated, String description, Type type, Long location, char outdoor, Long owner) {
        this.id = id;
        this.title = title;
        this.dateCreated = dateCreated;
        this.description = description;
        this.type = type;
        this.location = location;
        this.outdoor = outdoor;
        this.owner = owner;
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

    public Long getLocation() {
        return location;
    }

    public void setLocation(Long location) {
        this.location = location;
    }

    public char getOutdoor() {
        return outdoor;
    }

    public void setOutdoor(char outdoor) {
        this.outdoor = outdoor;
    }

    public Long getOwner() {
        return owner;
    }

    public void setOwner(Long owner) {
        this.owner = owner;
    }
}
