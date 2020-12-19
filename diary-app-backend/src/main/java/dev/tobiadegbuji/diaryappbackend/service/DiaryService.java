package dev.tobiadegbuji.diaryappbackend.service;

import dev.tobiadegbuji.diaryappbackend.model.Diary;

import java.util.Set;

public interface DiaryService {
    void createDiary(String authorization, Diary diary);

    Set<Diary> getUserDiaries(String authorization);
}
