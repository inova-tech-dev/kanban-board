package dev.inovatech.kanban.controller;

import dev.inovatech.kanban.dto.MoveTaskRequest;
import dev.inovatech.kanban.dto.TaskDTO;
import dev.inovatech.kanban.model.Task;
import dev.inovatech.kanban.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@RequiredArgsConstructor
public class TaskController {

    private final TaskService taskService;

    @GetMapping
    public List<Task> getAll() {
        return taskService.findAll();
    }

    @PostMapping
    public Task create(@RequestBody TaskDTO dto) {
        return taskService.create(dto);
    }

    @PutMapping("/{id}")
    public Task update(@PathVariable String id, @RequestBody TaskDTO dto) {
        return taskService.update(id, dto);
    }

    @PatchMapping("/{id}/move")
    public Task move(@PathVariable String id, @RequestBody MoveTaskRequest req) {
        return taskService.move(id, req.getTargetColumnId());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        taskService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
