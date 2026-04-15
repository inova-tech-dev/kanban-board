import { useDroppable } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { Column } from '../types'
import { KanbanCard } from './KanbanCard'

interface Props {
  column: Column
}

const columnColors: Record<string, string> = {
  todo: 'border-t-slate-400',
  'in-progress': 'border-t-blue-500',
  review: 'border-t-yellow-500',
  done: 'border-t-green-500',
}

const columnDots: Record<string, string> = {
  todo: 'bg-slate-400',
  'in-progress': 'bg-blue-500',
  review: 'bg-yellow-500',
  done: 'bg-green-500',
}

export function KanbanColumn({ column }: Props) {
  const { setNodeRef, isOver } = useDroppable({ id: column.id })

  return (
    <div
      className={`flex flex-col bg-slate-800/80 rounded-2xl border-t-2 ${columnColors[column.id] ?? 'border-t-slate-500'}
        min-w-[280px] w-[280px] max-h-[calc(100vh-160px)]`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700/60">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${columnDots[column.id] ?? 'bg-slate-400'}`} />
          <h2 className="text-slate-200 font-semibold text-sm">{column.title}</h2>
        </div>
        <span className="bg-slate-700 text-slate-400 text-xs font-medium px-2 py-0.5 rounded-full">
          {column.tasks.length}
        </span>
      </div>

      {/* Cards */}
      <div
        ref={setNodeRef}
        className={`flex flex-col gap-2.5 p-3 overflow-y-auto flex-1 transition-colors duration-150
          ${isOver ? 'bg-slate-700/30 rounded-b-2xl' : ''}`}
      >
        <SortableContext items={column.tasks.map((t) => t.id)} strategy={verticalListSortingStrategy}>
          {column.tasks.map((task) => (
            <KanbanCard key={task.id} task={task} />
          ))}
        </SortableContext>
        {column.tasks.length === 0 && (
          <div className="flex flex-col items-center justify-center py-10 text-slate-600 text-sm">
            <span className="text-2xl mb-2">📭</span>
            Nenhuma tarefa
          </div>
        )}
      </div>
    </div>
  )
}
