package dev.tobiadegbuji.diaryappbackend.service;

import dev.tobiadegbuji.diaryappbackend.dto.DiaryEntriesRequest;
import dev.tobiadegbuji.diaryappbackend.dto.EntryRequest;
import dev.tobiadegbuji.diaryappbackend.model.Entry;

import java.util.List;
import java.util.Set;

public interface EntryService {

    void createEntry(EntryRequest entryRequest);

    Set<Entry> findDiaryEntries(DiaryEntriesRequest diaryEntriesRequest);
}
