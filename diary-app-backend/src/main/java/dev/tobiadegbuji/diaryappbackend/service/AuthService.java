package dev.tobiadegbuji.diaryappbackend.service;

import dev.tobiadegbuji.diaryappbackend.dto.RegisterRequest;
import dev.tobiadegbuji.diaryappbackend.dto.SignInRequest;

public interface AuthService {

    void register(RegisterRequest registerRequest);

    void signIn(SignInRequest signInRequest);
}
