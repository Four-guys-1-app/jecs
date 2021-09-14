package com.codeup.capstonestarter.web;

import com.codeup.capstonestarter.data.user.User;
import com.codeup.capstonestarter.data.user.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/users", headers = "Accept=application/json")
public class UsersController {

    private UserRepository userRepository;

    public UsersController(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @GetMapping
    private List<User> getAll() {
        return userRepository.findAll();
    }

    @PostMapping
    private void createUser(@RequestBody User myUser) {
        userRepository.save(myUser);

    }

    @PutMapping("{id}")
    private void updateUser(@RequestBody User myUser, @PathVariable Long id) {
        userRepository.save(myUser);

    }

    @DeleteMapping("{id}")
    private void deleteUser(@PathVariable Long id){
        userRepository.deleteById(id);
    }
}