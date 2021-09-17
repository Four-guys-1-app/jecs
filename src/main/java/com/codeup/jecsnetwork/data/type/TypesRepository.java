package com.codeup.jecsnetwork.data.type;

import com.codeup.jecsnetwork.data.event.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TypesRepository extends JpaRepository <Type, Long>{
    @Query("SELECT e from Type e where lower(e.type) like %:term%")
    List<Event> searchByTypeLike(@Param("term") String term);


}
