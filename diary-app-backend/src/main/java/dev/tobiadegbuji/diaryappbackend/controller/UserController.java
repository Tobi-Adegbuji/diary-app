package dev.tobiadegbuji.diaryappbackend.controller;

import dev.tobiadegbuji.diaryappbackend.model.User;
import dev.tobiadegbuji.diaryappbackend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    private final UserService userService;




    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id") Long id){
        userService.deleteUserById(id);
        return new ResponseEntity<>(String.format("User with id: %s deleted.", id), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateUser(@PathVariable("id") Long id, @RequestBody User user){
        userService.updateUserById(id, user);
        return new ResponseEntity<>(String.format("User with id: %s was updated.", id), HttpStatus.OK);
    }

}
