package com.codeup.capstonestarter.data;

import com.codeup.capstonestarter.data.event.Event;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import net.bytebuddy.dynamic.loading.InjectionClassLoader;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "event_dates")
public class EventDates {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JsonIgnoreProperties("event_dates")
    private Event event;

    @Column(nullable = false)
    private Date date;


}
