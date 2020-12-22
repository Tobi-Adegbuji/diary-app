package dev.tobiadegbuji.diaryappbackend.controller;

import dev.tobiadegbuji.diaryappbackend.dto.DiaryEntriesRequest;
import dev.tobiadegbuji.diaryappbackend.dto.EntryRequest;
import dev.tobiadegbuji.diaryappbackend.model.Entry;
import dev.tobiadegbuji.diaryappbackend.service.EntryService;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@AllArgsConstructor
@RequestMapping("/api/entries")
public class EntryController {

    private final EntryService entryService;

    @PostMapping
    public ResponseEntity<?> createEntry(@RequestBody EntryRequest entry){
        entryService.createEntry(entry);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/retrieve")
    public ResponseEntity<?> retrieveEntries(@RequestBody DiaryEntriesRequest diaryEntriesRequest){
        Set<Entry> entries = entryService.findDiaryEntries(diaryEntriesRequest);
        return new ResponseEntity<>(entries,HttpStatus.OK);
    }


}
