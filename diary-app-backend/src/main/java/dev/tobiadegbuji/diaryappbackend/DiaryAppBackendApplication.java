package dev.tobiadegbuji.diaryappbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class DiaryAppBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(DiaryAppBackendApplication.class, args);
    }

}
