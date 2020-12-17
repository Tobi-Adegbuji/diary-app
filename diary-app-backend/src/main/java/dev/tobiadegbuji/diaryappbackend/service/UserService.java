package dev.tobiadegbuji.diaryappbackend.service;

import dev.tobiadegbuji.diaryappbackend.model.User;

public interface UserService {
    void deleteUserById(Long id);

    void updateUserById(Long id, User user);
}
