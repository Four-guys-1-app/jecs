package com.codeup.capstonestarter.data.post;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogsRepository extends JpaRepository <Post, Long> {



}
