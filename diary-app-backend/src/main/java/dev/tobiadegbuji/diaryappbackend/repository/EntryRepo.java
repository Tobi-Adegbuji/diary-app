package dev.tobiadegbuji.diaryappbackend.repository;

import dev.tobiadegbuji.diaryappbackend.model.Entry;
import org.springframework.data.repository.CrudRepository;

public interface EntryRepo extends CrudRepository<Entry,Long> {
}
