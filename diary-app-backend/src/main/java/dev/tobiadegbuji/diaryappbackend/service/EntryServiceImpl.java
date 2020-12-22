package dev.tobiadegbuji.diaryappbackend.service;

import dev.tobiadegbuji.diaryappbackend.dto.DiaryEntriesRequest;
import dev.tobiadegbuji.diaryappbackend.dto.EntryRequest;
import dev.tobiadegbuji.diaryappbackend.model.Diary;
import dev.tobiadegbuji.diaryappbackend.model.Entry;
import dev.tobiadegbuji.diaryappbackend.repository.DiaryRepo;
import dev.tobiadegbuji.diaryappbackend.repository.EntryRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@AllArgsConstructor
@Service
public class EntryServiceImpl implements EntryService{

    private final EntryRepo entryRepo;
    private final DiaryRepo diaryRepo;


    @Override
    public void createEntry(EntryRequest entryRequest) {
        Optional<Diary> optionalDiary = diaryRepo.findById(entryRequest.getDiaryId());
        if(optionalDiary.isEmpty()){
            return;
        }
        Diary diary = optionalDiary.get();
        Entry entry = new Entry();
        entry.setDateCreated(LocalDate.now());
        entry.setMessage(entryRequest.getMessage());
        entry.setTitle(entryRequest.getTitle());
        diary.getEntries().add(entry);
        diaryRepo.save(diary);
    }

    @Override
    public Set<Entry> findDiaryEntries(DiaryEntriesRequest diaryEntriesRequest) {
        return diaryRepo
                .findById(diaryEntriesRequest.getDiaryId())
                .get()
                .getEntries();
    }
}
