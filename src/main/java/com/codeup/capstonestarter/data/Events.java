package com.codeup.capstonestarter.data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Posts")
public class Events {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private Date date_created;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private Long event_type_id;

    @Column(nullable = false)
    private Long location_id;

    @Column(nullable = false)
    private char outdoor;

    @Column(nullable = false)
    private Long owner_id;

    public Events () {}

    public Events(Long id, String title, Date date_created, String description, Long event_type_id, Long location_id, char outdoor, Long owner_id) {
        this.id = id;
        this.title = title;
        this.date_created = date_created;
        this.description = description;
        this.event_type_id = event_type_id;
        this.location_id = location_id;
        this.outdoor = outdoor;
        this.owner_id = owner_id;
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

    public Date getDate_created() {
        return date_created;
    }

    public void setDate_created(Date date_created) {
        this.date_created = date_created;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getEvent_type_id() {
        return event_type_id;
    }

    public void setEvent_type_id(Long event_type_id) {
        this.event_type_id = event_type_id;
    }

    public Long getLocation_id() {
        return location_id;
    }

    public void setLocation_id(Long location_id) {
        this.location_id = location_id;
    }

    public char getOutdoor() {
        return outdoor;
    }

    public Long getOwner_id() {
        return owner_id;
    }

    public void setOwner_id(Long owner_id) {
        this.owner_id = owner_id;
    }

    public void setOutdoor(char outdoor) {
        this.outdoor = outdoor;
    }
}
