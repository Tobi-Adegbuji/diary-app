package dev.tobiadegbuji.diaryappbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EntryRequest {
    private String title;
    private String message;
    private Long diaryId;
}
