package dev.inovatech.kanban.controller;

import dev.inovatech.kanban.model.KanbanColumn;
import dev.inovatech.kanban.repository.ColumnRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/columns")
@RequiredArgsConstructor
public class ColumnController {

    private final ColumnRepository columnRepository;

    @GetMapping
    public List<KanbanColumn> getAll() {
        return columnRepository.findAllByOrderByPositionAsc();
    }
}
