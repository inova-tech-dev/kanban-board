import { Member } from '../types'

interface Props {
  member: Member
  size?: 'sm' | 'md'
}

export function MemberAvatar({ member, size = 'sm' }: Props) {
  const dim = size === 'sm' ? 'w-7 h-7 text-xs' : 'w-9 h-9 text-sm'
  return (
    <div
      className={`${dim} rounded-full flex items-center justify-center font-bold text-white flex-shrink-0`}
      style={{ backgroundColor: member.color }}
      title={`${member.name} — ${member.role}`}
    >
      {member.name.charAt(0)}
    </div>
  )
}
