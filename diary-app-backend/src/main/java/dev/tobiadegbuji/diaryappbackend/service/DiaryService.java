package dev.tobiadegbuji.diaryappbackend.service;

import dev.tobiadegbuji.diaryappbackend.model.Diary;

public interface DiaryService {
    void createDiary(String authorization, Diary diary);
}
