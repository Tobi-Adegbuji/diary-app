package dev.tobiadegbuji.diaryappbackend.service;

import dev.tobiadegbuji.diaryappbackend.dto.RegisterRequest;
import dev.tobiadegbuji.diaryappbackend.dto.SignInRequest;
import dev.tobiadegbuji.diaryappbackend.dto.SignInResponse;

public interface AuthService {

    void register(RegisterRequest registerRequest);

    SignInResponse signIn(SignInRequest signInRequest);

}
