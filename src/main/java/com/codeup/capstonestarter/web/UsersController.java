package com.codeup.capstonestarter.web;

import com.codeup.capstonestarter.data.user.User;
import com.codeup.capstonestarter.data.user.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/users", headers = "Accept=application/json")
public class UsersController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UsersController(UserRepository userRepository, PasswordEncoder passwordEncoder){
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @GetMapping
    private List<User> getAll() {
        return userRepository.findAll();
    }

    @PostMapping
    private void create(@RequestBody User myUser) {
        myUser.setPassword(passwordEncoder.encode(myUser.getPassword()));
        userRepository.save(myUser);

    }

    @PutMapping("{id}")
    private void update(@RequestBody User myUser, @PathVariable Long id) {
        userRepository.save(myUser);

    }

    @DeleteMapping("{id}")
    private void delete(@PathVariable Long id){
        userRepository.deleteById(id);
    }
}