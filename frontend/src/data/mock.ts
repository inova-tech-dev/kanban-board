import { Column, Member } from '../types'

export const members: Member[] = [
  { id: 'm1', name: 'Pedro', role: 'Frontend', color: '#6366f1' },
  { id: 'm2', name: 'Ana', role: 'Backend', color: '#ec4899' },
  { id: 'm3', name: 'TechBoss', role: 'Tech Lead', color: '#f59e0b' },
]

export const initialColumns: Column[] = [
  {
    id: 'todo',
    title: 'A Fazer',
    tasks: [
      {
        id: 't1',
        title: 'Configurar CI/CD com GitHub Actions',
        description: 'Pipeline de build e deploy automático',
        priority: 'alta',
        assignee: members[2],
        columnId: 'todo',
        createdAt: '2026-04-15',
      },
      {
        id: 't2',
        title: 'Criar componente de filtro por membro',
        priority: 'media',
        assignee: members[0],
        columnId: 'todo',
        createdAt: '2026-04-15',
      },
      {
        id: 't3',
        title: 'Implementar autenticação JWT',
        priority: 'alta',
        assignee: members[1],
        columnId: 'todo',
        createdAt: '2026-04-14',
      },
    ],
  },
  {
    id: 'in-progress',
    title: 'Em Progresso',
    tasks: [
      {
        id: 't4',
        title: 'UI Kanban Board — drag & drop',
        description: 'Interface principal com arrastar cards entre colunas',
        priority: 'alta',
        assignee: members[0],
        columnId: 'in-progress',
        createdAt: '2026-04-14',
      },
      {
        id: 't5',
        title: 'API REST — endpoints de tasks',
        description: 'CRUD completo com Spring Boot',
        priority: 'alta',
        assignee: members[1],
        columnId: 'in-progress',
        createdAt: '2026-04-14',
      },
    ],
  },
  {
    id: 'review',
    title: 'Em Revisão',
    tasks: [
      {
        id: 't6',
        title: 'Estrutura inicial do repositório',
        description: 'README, .gitignore, estrutura de pastas',
        priority: 'baixa',
        assignee: members[2],
        columnId: 'review',
        createdAt: '2026-04-13',
      },
    ],
  },
  {
    id: 'done',
    title: 'Concluído',
    tasks: [
      {
        id: 't7',
        title: 'Criar organização GitHub inova-tech-dev',
        description: 'Org criada com times frontend e backend',
        priority: 'media',
        assignee: members[2],
        columnId: 'done',
        createdAt: '2026-04-07',
      },
    ],
  },
]
