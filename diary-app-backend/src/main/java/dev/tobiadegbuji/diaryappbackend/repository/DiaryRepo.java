package dev.tobiadegbuji.diaryappbackend.repository;

import dev.tobiadegbuji.diaryappbackend.model.Diary;
import org.springframework.data.repository.CrudRepository;

public interface DiaryRepo extends CrudRepository<Diary,Long> {
}
