package dev.inovatech.kanban.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Member {
    @Id
    private String id;
    private String name;
    private String role;
    private String color;
}
