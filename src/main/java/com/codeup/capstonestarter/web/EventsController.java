package com.codeup.capstonestarter.web;

import com.codeup.capstonestarter.data.event.Event;
import com.codeup.capstonestarter.data.event.EventRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/events", headers = "Accept=application/json")
public class EventsController {

    private final EventRepository eventRepository;

    public EventsController(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    @GetMapping
    private List<Event> getEvents() {return eventRepository.findAll();}

    @GetMapping("{id}")
    private Event getEventById(@PathVariable Long id) {
        try {
            return eventRepository.findById(id).get();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return null;
    }

}
