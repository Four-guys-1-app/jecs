package com.codeup.capstonestarter.web;

import com.codeup.capstonestarter.data.event.Event;
import com.codeup.capstonestarter.data.event.EventRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Locale;

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

    @GetMapping("{title}")
    private List<Event> getByKeyword(String title) {
        try {
            title = title.toLowerCase();
            return eventRepository.searchByTitleLike(title);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return null;
    }


}
