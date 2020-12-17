package dev.tobiadegbuji.diaryappbackend.controller;

import dev.tobiadegbuji.diaryappbackend.dto.RegisterRequest;
import dev.tobiadegbuji.diaryappbackend.dto.SignInRequest;
import dev.tobiadegbuji.diaryappbackend.dto.SignInResponse;
import dev.tobiadegbuji.diaryappbackend.service.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/api/auth")
//Controller that deals with all auth related requests
public class AuthenticationController {

    private final AuthService authService;


    //Creates new User
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest){
        authService.register(registerRequest);
        return new ResponseEntity<>("Registration success!", HttpStatus.CREATED);
    }

    //Creates new User
    @PostMapping("/sign_in")
    public SignInResponse signIn(@RequestBody SignInRequest signInRequest){
        return authService.signIn(signInRequest);
    }

}