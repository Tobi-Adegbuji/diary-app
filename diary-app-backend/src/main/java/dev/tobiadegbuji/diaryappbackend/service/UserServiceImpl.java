package dev.tobiadegbuji.diaryappbackend.service;

import dev.tobiadegbuji.diaryappbackend.model.User;
import dev.tobiadegbuji.diaryappbackend.repository.UserRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@AllArgsConstructor
@Service
public class UserServiceImpl implements UserService{

    private final UserRepo userRepo;

    @Override
    public void deleteUserById(Long id) {
        userRepo.deleteById(id);
    }

    @Override
    public void updateUserById(Long id, User user) {
        User originalUser;
        Optional<User> optionalUser = userRepo.findUserById(id);

        if(optionalUser.isPresent()) {
            originalUser = optionalUser.get();
            originalUser.setUsername(user.getUsername());
            originalUser.setPassword(user.getPassword());
            originalUser.setEmail(user.getEmail());
            userRepo.save(originalUser) ;
        }
    }
}
