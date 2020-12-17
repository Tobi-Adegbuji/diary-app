package dev.tobiadegbuji.diaryappbackend.service;

import dev.tobiadegbuji.diaryappbackend.dto.RegisterRequest;
import dev.tobiadegbuji.diaryappbackend.dto.SignInRequest;
import dev.tobiadegbuji.diaryappbackend.model.User;
import dev.tobiadegbuji.diaryappbackend.repository.UserRepo;
import dev.tobiadegbuji.diaryappbackend.model.UserRole;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

@Service
@AllArgsConstructor
public class AuthServiceImpl implements AuthService{

    //Uses a BCrypt Impl
    private final PasswordEncoder passwordEncoder;
    private final UserRepo userRepo;
    private final AuthenticationManager authenticationManager;

    //Method used to register a new user
    @Override
    @Transactional
    public void register(RegisterRequest registerRequest){
        var user = User.builder()
                .username(registerRequest.getUsername().toLowerCase())
                //Encoding password using BCrypt Encoder
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .email(registerRequest.getEmail().toLowerCase())
                .firstName(StringUtils.capitalize(registerRequest.getFirstName()).trim())
                .lastName(StringUtils.capitalize(registerRequest.getLastName()).trim())
                .isEnabled(true) //TODO: Email Verification
                .userRole(UserRole.USER)
                .build();

        userRepo.save(user);

    }

    //Creates UsernamePassword Token and passes it to authenticationManager which calls our UserDetailsService and reads user from database.
    @Override
    public void signIn(SignInRequest signInRequest) {
        authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(signInRequest.getUsername(), signInRequest.getPassword()));
    }

}
