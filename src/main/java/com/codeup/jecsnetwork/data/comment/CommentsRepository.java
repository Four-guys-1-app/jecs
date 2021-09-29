package com.codeup.jecsnetwork.data.comment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CommentsRepository extends JpaRepository<Comment, Long> {

    @Query(value = "SELECT * FROM comments WHERE event_id = :id ORDER BY posted_date", nativeQuery = true)
    List<Comment> findByEventId(@Param("id") Long id);

    @Query(value = "SELECT * FROM comments WHERE post_id = :id ORDER BY posted_date", nativeQuery = true)
    List<Comment> findByPostId(@Param("id") Long id);

}
