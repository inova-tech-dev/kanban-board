export type Priority = 'alta' | 'media' | 'baixa'

export interface Member {
  id: string
  name: string
  role: string
  color: string
}

export interface Task {
  id: string
  title: string
  description?: string
  priority: Priority
  assignee: Member
  columnId: string
  createdAt: string
}

export interface Column {
  id: string
  title: string
  tasks: Task[]
}
