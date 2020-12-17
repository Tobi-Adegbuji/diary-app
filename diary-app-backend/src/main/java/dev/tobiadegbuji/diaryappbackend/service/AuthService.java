package dev.tobiadegbuji.diaryappbackend.service;

import dev.tobiadegbuji.diaryappbackend.dto.RegisterRequest;
import dev.tobiadegbuji.diaryappbackend.dto.SignInRequest;
import dev.tobiadegbuji.diaryappbackend.dto.SignInResponse;
import dev.tobiadegbuji.diaryappbackend.model.User;

public interface AuthService {

    void register(RegisterRequest registerRequest);

    SignInResponse signIn(SignInRequest signInRequest);

    User retrieveUser(String authentication);

}
