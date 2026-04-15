import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Task } from '../types'
import { MemberAvatar } from './MemberAvatar'

interface Props {
  task: Task
}

const priorityConfig = {
  alta: { label: 'Alta', cls: 'bg-red-500/20 text-red-400 border border-red-500/30' },
  media: { label: 'Média', cls: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' },
  baixa: { label: 'Baixa', cls: 'bg-green-500/20 text-green-400 border border-green-500/30' },
}

export function KanbanCard({ task }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: task.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const prio = priorityConfig[task.priority]

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`bg-slate-700/60 border border-slate-600/50 rounded-xl p-3.5 cursor-grab active:cursor-grabbing
        hover:border-slate-500 hover:bg-slate-700 transition-all duration-150 shadow-sm
        ${isDragging ? 'opacity-50 scale-95 shadow-xl ring-2 ring-indigo-500/50' : ''}`}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <p className="text-slate-100 text-sm font-medium leading-snug">{task.title}</p>
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium whitespace-nowrap ${prio.cls}`}>
          {prio.label}
        </span>
      </div>
      {task.description && (
        <p className="text-slate-400 text-xs mb-3 leading-relaxed">{task.description}</p>
      )}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MemberAvatar member={task.assignee} />
          <div>
            <p className="text-slate-300 text-xs font-medium">{task.assignee.name}</p>
            <p className="text-slate-500 text-xs">{task.assignee.role}</p>
          </div>
        </div>
        <span className="text-slate-500 text-xs">{task.createdAt}</span>
      </div>
    </div>
  )
}
