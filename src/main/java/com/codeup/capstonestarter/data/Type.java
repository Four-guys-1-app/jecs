package com.codeup.capstonestarter.data;

import javax.persistence.*;
import java.util.Collection;

@Entity
<<<<<<< HEAD
@Table(name = "Type")
=======
@Table (name = "types")
>>>>>>> 0a8e7c1585d1de50dfcb0a65cb4aa1786dad3993
public class Type {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String type;

<<<<<<< HEAD
    public Type() {
    }
=======
    @OneToMany(mappedBy = "type")
    private Collection<Event> events;

    public Type() {}
>>>>>>> 0a8e7c1585d1de50dfcb0a65cb4aa1786dad3993

    public Type(Long id, String type) {
        this.id = id;
        this.type = type;
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


}
