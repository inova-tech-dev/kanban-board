package dev.inovatech.kanban.dto;

import lombok.Data;

@Data
public class TaskDTO {
    private String title;
    private String description;
    private String priority;
    private String assigneeId;
    private String columnId;
}
