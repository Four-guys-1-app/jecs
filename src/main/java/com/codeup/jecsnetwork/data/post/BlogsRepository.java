package com.codeup.jecsnetwork.data.post;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BlogsRepository extends JpaRepository <Post, Long> {

    @Query(value = "SELECT * from posts where type_id = :id", nativeQuery = true)
    List<Post> findByType(@Param("id") Long id);


}
