package dev.tobiadegbuji.diaryappbackend.service;

import dev.tobiadegbuji.diaryappbackend.model.Diary;
import dev.tobiadegbuji.diaryappbackend.model.User;
import dev.tobiadegbuji.diaryappbackend.repository.AuthRepo;
import dev.tobiadegbuji.diaryappbackend.repository.DiaryRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class DiaryServiceImpl implements DiaryService{

    private final AuthService authService;
    private final DiaryRepo diaryRepo;
    private final AuthRepo authRepo;

    @Override
    public void createDiary(String authorization, Diary diary) {
        User user = authService.retrieveUser(authorization);
        user.getDiaries().add(diary);
        authRepo.save(user);
    }
}
