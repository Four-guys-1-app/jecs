package com.codeup.capstonestarter.data.event;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.*;

public interface EventRepository extends JpaRepository <Event, Long> {

    @Query("SELECT e from Event e where lower(e.title) like %:term%")
    List<Event> searchByTitleLike(@Param("term") String term);

    @Query("SELECT e from Event e where e.dateCreated like %:term%")
    List<Event> findEventByDateLike(@Param("term") String term);

    // @Query(value="select * from author a where a.first_name= :firstName", nativeQuery=true)
    // List<Author> getAuthorsByFirstName(String firstName);

    @Query("SELECT e from Event e where e.location.postalCode like %:term%")
    List<Event> searchByZipCodeLike(@Param("term") int term);

}
