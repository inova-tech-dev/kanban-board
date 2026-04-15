package dev.inovatech.kanban.model;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class KanbanColumn {
    @Id
    private String id;
    private String title;
    private int position;

    @OneToMany(mappedBy = "column", fetch = FetchType.LAZY)
    @OrderBy("createdAt DESC")
    private List<Task> tasks;
}
