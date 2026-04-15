import { useState } from 'react'
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
  DragOverlay,
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { Column, Task } from '../types'
import { initialColumns, members } from '../data/mock'
import { KanbanColumn } from './KanbanColumn'
import { KanbanCard } from './KanbanCard'
import { MemberAvatar } from './MemberAvatar'

export function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>(initialColumns)
  const [activeTask, setActiveTask] = useState<Task | null>(null)
  const [filterMember, setFilterMember] = useState<string | null>(null)

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }))

  const findColumn = (id: string) => columns.find((c) => c.id === id)
  const findTask = (id: string) => {
    for (const col of columns) {
      const task = col.tasks.find((t) => t.id === id)
      if (task) return { task, column: col }
    }
    return null
  }

  const handleDragStart = (e: DragStartEvent) => {
    const found = findTask(e.active.id as string)
    if (found) setActiveTask(found.task)
  }

  const handleDragOver = (e: DragOverEvent) => {
    const { active, over } = e
    if (!over) return

    const activeId = active.id as string
    const overId = over.id as string

    const activeData = findTask(activeId)
    if (!activeData) return

    // Over a column directly
    const targetColId = findColumn(overId)?.id ?? findTask(overId)?.column.id
    if (!targetColId || targetColId === activeData.column.id) return

    setColumns((prev) =>
      prev.map((col) => {
        if (col.id === activeData.column.id) {
          return { ...col, tasks: col.tasks.filter((t) => t.id !== activeId) }
        }
        if (col.id === targetColId) {
          return { ...col, tasks: [...col.tasks, { ...activeData.task, columnId: targetColId }] }
        }
        return col
      })
    )
  }

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e
    setActiveTask(null)
    if (!over) return

    const activeId = active.id as string
    const overId = over.id as string

    if (activeId === overId) return

    setColumns((prev) =>
      prev.map((col) => {
        const activeIdx = col.tasks.findIndex((t) => t.id === activeId)
        const overIdx = col.tasks.findIndex((t) => t.id === overId)
        if (activeIdx !== -1 && overIdx !== -1) {
          return { ...col, tasks: arrayMove(col.tasks, activeIdx, overIdx) }
        }
        return col
      })
    )
  }

  const totalTasks = columns.reduce((acc, c) => acc + c.tasks.length, 0)

  const filteredColumns = filterMember
    ? columns.map((col) => ({
        ...col,
        tasks: col.tasks.filter((t) => t.assignee.id === filterMember),
      }))
    : columns

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-700/60 bg-slate-900/95 backdrop-blur sticky top-0 z-10">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold text-white text-sm">
              IT
            </div>
            <div>
              <h1 className="font-bold text-white text-lg leading-tight">Inova-Tech Kanban</h1>
              <p className="text-slate-400 text-xs">{totalTasks} tarefas · {columns.length} colunas</p>
            </div>
          </div>

          {/* Member filter */}
          <div className="flex items-center gap-2">
            <span className="text-slate-400 text-xs mr-1">Filtrar:</span>
            <button
              onClick={() => setFilterMember(null)}
              className={`text-xs px-3 py-1.5 rounded-full transition-colors ${
                !filterMember ? 'bg-indigo-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              Todos
            </button>
            {members.map((m) => (
              <button
                key={m.id}
                onClick={() => setFilterMember(filterMember === m.id ? null : m.id)}
                className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full transition-colors ${
                  filterMember === m.id ? 'bg-indigo-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                <MemberAvatar member={m} size="sm" />
                {m.name}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Board */}
      <main className="flex-1 overflow-x-auto px-6 py-6">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
        >
          <div className="flex gap-5 h-full">
            {filteredColumns.map((col) => (
              <KanbanColumn key={col.id} column={col} />
            ))}
          </div>
          <DragOverlay>
            {activeTask ? (
              <div className="rotate-2 opacity-90">
                <KanbanCard task={activeTask} />
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
      </main>
    </div>
  )
}
