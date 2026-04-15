package dev.inovatech.kanban.service;

import dev.inovatech.kanban.dto.TaskDTO;
import dev.inovatech.kanban.model.*;
import dev.inovatech.kanban.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepo;
    private final ColumnRepository columnRepo;

    public List<Task> findAll() {
        return taskRepo.findAll();
    }

    public Task create(TaskDTO dto) {
        KanbanColumn col = columnRepo.findById(dto.getColumnId())
            .orElseThrow(() -> new RuntimeException("Column not found: " + dto.getColumnId()));

        Task task = Task.builder()
            .id(UUID.randomUUID().toString())
            .title(dto.getTitle())
            .description(dto.getDescription())
            .priority(Task.Priority.valueOf(dto.getPriority().toUpperCase()))
            .assignee(new Member(dto.getAssigneeId(), null, null, null))
            .column(col)
            .createdAt(LocalDate.now().toString())
            .build();

        return taskRepo.save(task);
    }

    public Task update(String id, TaskDTO dto) {
        Task task = taskRepo.findById(id)
            .orElseThrow(() -> new RuntimeException("Task not found: " + id));

        task.setTitle(dto.getTitle());
        task.setDescription(dto.getDescription());
        task.setPriority(Task.Priority.valueOf(dto.getPriority().toUpperCase()));
        return taskRepo.save(task);
    }

    public Task move(String id, String targetColumnId) {
        Task task = taskRepo.findById(id)
            .orElseThrow(() -> new RuntimeException("Task not found: " + id));
        KanbanColumn col = columnRepo.findById(targetColumnId)
            .orElseThrow(() -> new RuntimeException("Column not found: " + targetColumnId));
        task.setColumn(col);
        return taskRepo.save(task);
    }

    public void delete(String id) {
        taskRepo.deleteById(id);
    }
}
