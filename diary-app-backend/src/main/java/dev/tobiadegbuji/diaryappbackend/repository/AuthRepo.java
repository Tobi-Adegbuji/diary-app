package dev.tobiadegbuji.diaryappbackend.repository;

import dev.tobiadegbuji.diaryappbackend.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface AuthRepo extends CrudRepository<User,Long> {

    Optional<User> findUserByUsername(String username);

}
