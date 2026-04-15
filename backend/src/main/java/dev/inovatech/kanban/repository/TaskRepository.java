package dev.inovatech.kanban.repository;

import dev.inovatech.kanban.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, String> {}
