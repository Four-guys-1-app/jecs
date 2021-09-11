package com.codeup.capstonestarter.web;

import com.codeup.capstonestarter.data.event.Event;
import com.codeup.capstonestarter.data.event.EventRepository;
import org.springframework.web.bind.annotation.*;


import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.FormatStyle;
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

    @GetMapping("/title")
    private List<Event> getByKeyword(@RequestParam String title) {
        try {
            title = title.toLowerCase();
            return eventRepository.searchByTitleLike(title);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return null;
    }

    @GetMapping("/date")
    private List<Event> getByDate(@RequestParam String dateCreated) {
        try {
            // LocalDateTime date = LocalDateTime.parse(dateCreated);
            // DateTimeFormatter formatter = DateTimeFormatter.ofPattern("uuuu-MM-dd");
            // String dateText = date.format(formatter);
            return eventRepository.findEventByDateLike(dateCreated);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return null;
    }

    @GetMapping("/postalCode")
    private List<Event> getByZip(@RequestParam String postalCode) {
        try {
            return eventRepository.searchByZipCodeLike(Integer.parseInt(postalCode));
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return null;
    }


}
