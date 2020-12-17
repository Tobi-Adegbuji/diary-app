package dev.tobiadegbuji.diaryappbackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
public class Diary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotEmpty
    private String name;
    @Enumerated(EnumType.STRING)
    private DiaryColor color;
    @OneToMany(cascade = CascadeType.ALL)
    private Set<Entry> entries;

}
