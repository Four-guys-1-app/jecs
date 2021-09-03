package com.codeup.capstonestarter.web;

import com.codeup.capstonestarter.data.EventsTypeRepository;
import com.codeup.capstonestarter.data.EventsTypes;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/eventTypes", headers = "Accept=application/json")
public class EventsTypeController {

    private final EventsTypeRepository eventsTypeRepository;

    public EventsTypeController(EventsTypeRepository eventsTypeRepository) {this.eventsTypeRepository = eventsTypeRepository;}


    @GetMapping
    private List<EventsTypes> getEventsByType() {
        return eventsTypeRepository.findAll();
    }
}
