-- Members
INSERT INTO member (id, name, role, color) VALUES ('m1', 'Pedro', 'Frontend', '#6366f1');
INSERT INTO member (id, name, role, color) VALUES ('m2', 'Ana', 'Backend', '#ec4899');
INSERT INTO member (id, name, role, color) VALUES ('m3', 'TechBoss', 'Tech Lead', '#f59e0b');

-- Columns
INSERT INTO kanban_column (id, title, position) VALUES ('todo', 'A Fazer', 1);
INSERT INTO kanban_column (id, title, position) VALUES ('in-progress', 'Em Progresso', 2);
INSERT INTO kanban_column (id, title, position) VALUES ('review', 'Em Revisão', 3);
INSERT INTO kanban_column (id, title, position) VALUES ('done', 'Concluído', 4);

-- Tasks
INSERT INTO task (id, title, description, priority, assignee_id, column_id, created_at)
  VALUES ('t1', 'Configurar CI/CD com GitHub Actions', 'Pipeline de build e deploy automático', 'ALTA', 'm3', 'todo', '2026-04-15');
INSERT INTO task (id, title, description, priority, assignee_id, column_id, created_at)
  VALUES ('t2', 'Criar componente de filtro por membro', NULL, 'MEDIA', 'm1', 'todo', '2026-04-15');
INSERT INTO task (id, title, description, priority, assignee_id, column_id, created_at)
  VALUES ('t3', 'Implementar autenticação JWT', NULL, 'ALTA', 'm2', 'todo', '2026-04-14');
INSERT INTO task (id, title, description, priority, assignee_id, column_id, created_at)
  VALUES ('t4', 'UI Kanban Board — drag & drop', 'Interface principal com arrastar cards entre colunas', 'ALTA', 'm1', 'in-progress', '2026-04-14');
INSERT INTO task (id, title, description, priority, assignee_id, column_id, created_at)
  VALUES ('t5', 'API REST — endpoints de tasks', 'CRUD completo com Spring Boot', 'ALTA', 'm2', 'in-progress', '2026-04-14');
INSERT INTO task (id, title, description, priority, assignee_id, column_id, created_at)
  VALUES ('t6', 'Estrutura inicial do repositório', 'README, .gitignore, estrutura de pastas', 'BAIXA', 'm3', 'review', '2026-04-13');
INSERT INTO task (id, title, description, priority, assignee_id, column_id, created_at)
  VALUES ('t7', 'Criar organização GitHub inova-tech-dev', 'Org criada com times frontend e backend', 'MEDIA', 'm3', 'done', '2026-04-07');
