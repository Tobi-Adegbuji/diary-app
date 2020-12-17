package dev.tobiadegbuji.diaryappbackend.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    private String username;
    private String password;
    private String email;
    private String firstName;
    private String lastName;

}
