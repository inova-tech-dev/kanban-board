package dev.inovatech.kanban.repository;

import dev.inovatech.kanban.model.KanbanColumn;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ColumnRepository extends JpaRepository<KanbanColumn, String> {
    List<KanbanColumn> findAllByOrderByPositionAsc();
}
