package com.codeup.capstonestarter.data.event;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.awt.*;

public interface EventRepository extends JpaRepository <Event, Long> {
    @Query("from Event e where e.title like %:term%")
    Event searchByTitleLike(@Param("term") String term);
}
