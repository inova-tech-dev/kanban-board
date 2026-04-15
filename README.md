# Inova-Tech Kanban Board

Interface Kanban para visualização de atividades da equipe Inova-Tech.

## Stack

| Camada | Tecnologia |
|--------|------------|
| Frontend | React 18 + TypeScript + Vite + Tailwind CSS |
| Backend | Java 21 + Spring Boot 3 + H2 |
| Drag & Drop | @dnd-kit/core |

## Estrutura

```
kanban-board/
├── frontend/          # React app (Vite + Tailwind)
│   └── src/
│       ├── components/   KanbanBoard, KanbanColumn, KanbanCard, MemberAvatar
│       ├── data/         mock.ts — dados iniciais
│       └── types/        TypeScript types
└── backend/           # Spring Boot API
    └── src/main/java/dev/inovatech/kanban/
        ├── controller/   TaskController, ColumnController
        ├── model/        Task, KanbanColumn, Member
        ├── service/      TaskService
        ├── dto/          TaskDTO, MoveTaskRequest
        └── config/       CorsConfig
```

## Como rodar

### Frontend
```bash
cd frontend
npm install
npm run dev
# http://localhost:5173
```

### Backend
```bash
cd backend
./mvnw spring-boot:run
# http://localhost:8080
# H2 Console: http://localhost:8080/h2-console
```

## API Endpoints

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | /api/columns | Lista colunas com tasks |
| GET | /api/tasks | Lista todas as tasks |
| POST | /api/tasks | Criar task |
| PUT | /api/tasks/{id} | Atualizar task |
| PATCH | /api/tasks/{id}/move | Mover task de coluna |
| DELETE | /api/tasks/{id} | Deletar task |

## Time

- **Pedro** — Frontend (React, TypeScript)
- **Ana** — Backend (Java, Spring Boot)
- **TechBoss** — Tech Lead
