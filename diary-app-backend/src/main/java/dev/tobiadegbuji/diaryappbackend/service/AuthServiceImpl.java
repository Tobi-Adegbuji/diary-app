package dev.tobiadegbuji.diaryappbackend.service;

import dev.tobiadegbuji.diaryappbackend.dto.RegisterRequest;
import dev.tobiadegbuji.diaryappbackend.dto.SignInRequest;
import dev.tobiadegbuji.diaryappbackend.dto.SignInResponse;
import dev.tobiadegbuji.diaryappbackend.model.User;
import dev.tobiadegbuji.diaryappbackend.repository.AuthRepo;
import dev.tobiadegbuji.diaryappbackend.model.UserRole;
import dev.tobiadegbuji.diaryappbackend.security.JwtCreator;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

@Service
@AllArgsConstructor
public class AuthServiceImpl implements AuthService{

    //Uses a BCrypt Impl
    private final PasswordEncoder passwordEncoder;
    private final AuthRepo userRepo;
    private final AuthenticationProvider authenticationProvider;
    private final JwtCreator jwtCreator;

    @Override
    public User retrieveUser(String authorization) {
        String token = "";
        if(authorization.startsWith("Bearer "))
             token = authorization.substring(7);
        return userRepo.findUserByUsername(jwtCreator.getUsernameFromToken(token))
                .orElseThrow(() -> new UsernameNotFoundException("Username not found"));
    }

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
    public SignInResponse signIn(SignInRequest signInRequest) {
        var authentication = authenticationProvider
                .authenticate(new UsernamePasswordAuthenticationToken(signInRequest.getUsername(), signInRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
       String token = jwtCreator.generateToken(authentication);
    return new SignInResponse(token, signInRequest.getUsername());
    }

}
