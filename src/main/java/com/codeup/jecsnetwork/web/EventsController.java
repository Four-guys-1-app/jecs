package com.codeup.jecsnetwork.web;

import com.codeup.jecsnetwork.data.event.Event;
import com.codeup.jecsnetwork.data.event.EventRepository;
import org.springframework.web.bind.annotation.*;


import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@RequestMapping(value = "/api/events", headers = "Accept=application/json")
public class EventsController {

    private final EventRepository eventRepository;

    public EventsController(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }


    @GetMapping
    private List<Event> getAll() {return eventRepository.findAll();}

    @GetMapping("{id}")
    private Event getById(@PathVariable Long id) {
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
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
            return eventRepository.findEventByDate(LocalDate.parse(dateCreated, formatter));
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

    @PostMapping
    private void createEvent(@RequestBody Event newEvent) {

    }


}
