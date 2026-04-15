package dev.inovatech.kanban.dto;

import lombok.Data;

@Data
public class MoveTaskRequest {
    private String targetColumnId;
}
