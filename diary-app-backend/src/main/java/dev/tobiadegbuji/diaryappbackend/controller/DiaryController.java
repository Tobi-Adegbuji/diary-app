package dev.tobiadegbuji.diaryappbackend.controller;


import dev.tobiadegbuji.diaryappbackend.model.Diary;
import dev.tobiadegbuji.diaryappbackend.repository.DiaryRepo;
import dev.tobiadegbuji.diaryappbackend.service.DiaryService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@AllArgsConstructor
@RequestMapping("/api/diaries")
public class DiaryController {

    private final DiaryService diaryService;

    @PostMapping
    public ResponseEntity<?> createDiary(@RequestHeader("Authorization") String authorization, @RequestBody Diary diary){
        diaryService.createDiary(authorization, diary);
        return new ResponseEntity<>("Successfully created diary!", HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<?> getDiariesByUsername(@RequestHeader("Authorization") String authorization){
       Set<Diary> diarySet = diaryService.getUserDiaries(authorization);
        return new ResponseEntity<>(diarySet, HttpStatus.OK);
    }
}
